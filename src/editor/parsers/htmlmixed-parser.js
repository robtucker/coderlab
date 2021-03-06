// too much work to do this in codemirror's runmode
// mostly because no out of the box solution for line numbers
// instead using htmlparser2 - which gives a startIndex for each element
// see https://github.com/fb55/htmlparser2
import htmlparser from "htmlparser2";
// domutils come with htmlparser2 - https://github.com/fb55/domutils
import {find as findElement} from "domutils";
import {merge, find, omit, orderBy} from "lodash";
import {Handler} from "./handlers/dom-handler";
import TextParser from "./text-parser";
import {utils} from "../../core/utils";
import {HtmlErrors} from "../errors/html-errors";

export default class HtmlParser extends TextParser {

    msgs = null;
    parser = null;
    errors = [];
    handler = null;
    ast = null;

    constructor(file) {
        super(file);
        this._parse();        
        this.msgs = new HtmlErrors(this.file);
        // console.log('initialized parser', this);
    }

    /**
     * Search the AST for required elements. 
     * 
     * {
     *     tagName: 'h1',                     // the name of the element
     *     textNode: {                        // an array of query operator and text node value
     *         opr: '===',
     *         val: 'foo'
     *     },           
     *     attrs: [                           // attributes must be an array of query arrays
     *         ['href', '===', 'foo']         // a query array takes the form of [attr, operator, value]
     *         ['class', 'contains', 'foo']   // e.g. use 'contains' operator to see if the foo class is present
     *         ['id', 'exists', '']           // you can check for the existance of an attr with the 'exists' operator
     *     ],                                 // (see utils.evalQueryOperator() for complete list of query operators)
     *     nextSibling: {tagName: 'h1'},      // a recursive query object representing the next sibling element                          
     *     prevSibling: {tagName: 'h1'},      // a recursive query object representing the previous sibling element        
     *     parent: {tagName: 'h1'},           // a recursive query object representing the parent element        
     *     type: 'tag'                        // type is either tag, text or directive (e.g. doctype is a directive)
     *     data: 'foo'                        // the data property is used by text nodes and directives              
     *     children: [{...}]                  // an array of query objects which will be called rcursively
     * }
     * 
     * Each of these accepts a query object as defined for the hasElem method
     * 
     * @param {object} query
     * @returns {false|string}
     * 
     */
    hasElem(query) {
        // console.log('hasElem', query);
        let baseElems = this._findElems(query, this.ast)

        // if children were specified in the query then we're not done yet
        // we need to handle the recursive call to children separately
        if(query.children) {
            // first lets check to see if at least one matching baseElem exists
            if(!baseElems || !baseElems.length) {
                // do some special error messaging magic here
                return this.msgs.parentOfChildNotFound(query);
            }
            // now search the baseElems for matching children
            return this._findChildren([...baseElems], query);
        }

        // success! return a 0 exit status
        if(baseElems && baseElems.length) return false;

        // now let's get to down to the error messaging logic
        // maybe the element does exist but it's just not where it should be
        if(query.nextSibling || query.prevSibling || query.parent) {
            let withoutRelatives = omit(query, ['nextSibling', 'prevSibling', 'parent']);
            let elemsNoRelatives = this._findElems(withoutRelatives, this.ast);
            //console.log('existingElems', newQuery, elemsNoRelatives);
            if(elemsNoRelatives && elemsNoRelatives.length) {
                return this.msgs.elemInWrongPlace(query, elemsNoRelatives);
            }
        }

        // maybe the element exists but it just doesn't have the right attr
        if(query.attrs) {
            let withoutAttrs = omit(query, ['attrs']);
            let elemsNoAttrs = this._findElems(withoutAttrs, this.ast);
            if(elemsNoAttrs && elemsNoAttrs.length) {
                return this.msgs.elemMayNotHaveAttrs(query, elemsNoAttrs);
            }
        }

        // in scenarios where there are funky operators on the textNode
        // then we should also check to make sure the elem simply doesn't have the right text
        if(query.textNode && query.textNode.opr) {
            let withoutText = omit(query, ['textNode']);
            let elemsNoText= this._findElems(withoutText, this.ast);
            if(elemsNoText && elemsNoText.length) {
                return this.msgs.elemMayNotHaveText(query, elemsNoText);
            }
        }

        // return a normal elem not found error
        return this.msgs.elemNotFound(query);
    }

    /**
     * 
     * @param {object} query
     * @param {array} elems
     */
    _findElems(query, elems, recurse = true) {
        // console.log('_findElems', query, elems, recurse);
        // most commonly used query params should go first
        let cb = (elem) => {
            if(query.tagName && elem.name !== query.tagName) return false;
            if(query.textNode) {
                // use indexOf as the default comparison operator
                let opr = query.textNode.opr || 'indexOf';
                let tCB = (e) => e.type === 'text' && utils.evalQueryOperator(e.data, opr, query.textNode.val);
                let textNode = findElement(tCB, elem.children, false);
                //console.log('search textNode', textNode);
                if(!textNode || !textNode.length) return false;
            }
            if(query.attrs) {
                if(!elem.attribs) return false;
                let res = true;
                query.attrs.forEach((attr) => {
                    let val = elem.attribs[attr[0]];
                    if(!val || !utils.evalQueryOperator(val, attr[1], attr[2])) res = false;
                });
                if(!res) return res;
            }

            if(query.nextSibling) {
                if(!elem.next) return false;
                let hasNext = this._findElems(query.nextSibling, [elem.next], false);
                if(!hasNext || !hasNext.length) return false;
            }

            if(query.prevSibling) {
                //console.log('search prevSibling', elem.prev.children);
                if(!elem.prev) return false;
                let hasPrev = this._findElems(query.prevSibling, [elem.prev], false);
                if(!hasPrev || !hasPrev.length) return false;
            }
            if(query.parent) {
                if(!elem.parent) return false;
                let hasParent = this._findElems(query.parent, [elem.parent], false);
                if(!hasParent || !hasParent.length) return false;
            }

            if(query.type && elem.type !== query.type) return false;
            if(query.data && elem.data !== query.data) return false;
            return true;
        }
        return findElement(cb, elems, recurse)
    }

    /**
     * Check a parent element to see if it has a required child
     * There may be multiple potential parents and multiple required children
     * 
     * @param {array} baseElems
     * @param {array} query
     * 
     */
    _findChildren(baseElems, query) {
        baseElems.forEach((baseElem) => {
            // we're going to save the results of the query onto the the elem itself
            // then afterwards we can compare potential parents and provide better error msgs
            baseElem.childQueries = [...query.children];
            baseElem.countRequiredChildren = 0;

            // cycle through the query and count the results
            baseElem.childQueries.forEach((child) => {
                let countChildren = 0
                let res = this._findElems(child, baseElem.children);
                child.resultCount = res ? res.length : 0;
                // this baseElem has at least one of the required children
                if(child.resultCount) baseElem.countRequiredChildren ++;
            });
        });

        let success = baseElems.filter(e => e.countRequiredChildren === e.childQueries.length);
        // console.log('_findChildren', baseElems, success);

        // 1 perfect match. Return a 0 exit status with no errors
        if(success.length === 1) return false;
        
        // too many successful elements!! oh dear, how to handle this?
        // todo - if this ever crops up then lets revisit
        if(success.length > 1) return `More than one element matches the criteria`;

        // now for the hard part - generate an error with line numbers
        let errText;

        // first lets find if one of baseElems has at least one required children
        let partialSuccess = baseElems.filter(e => e.countRequiredChildren > 0);
        // console.log('partialSuccess', partialSuccess);
        // if we're sure we know which parent is in play
        if(partialSuccess.length === 1) {
            let parent = partialSuccess[0];
            // then get the first child that failed the test
            let childQuery = find(parent.childQueries, q => q.resultCount === 0);
            
            // maybe the child does exist but it is simply outside the parent
            let childExistsOutsideParent = this._findElems(childQuery, this.ast);
            
            if(childExistsOutsideParent.length) {
                //console.log('childExistsOutsideParent', childQuery, childExistsOutsideParent);
                return this.msgs.childIsOutsideParent(parent, childExistsOutsideParent, childQuery)
            }
            // we're in a pretty good scenario here - we have the parent and we know which child is failing
            //console.log('childQuery', childQuery, errText);
            return this.msgs.childOfParentDoesNotExist(parent, childQuery);
        }

        // if it could be one or more parent
        if(partialSuccess.length > 1) {
            // console.log('multiple partial successes - this is bad news', partialSuccess);
            // the most likely parent would be the elem with the highest number of required children
            //let parent = orderBy(partialSuccess, 'countRequiredChildren')[0];
            return this.msgs.childOfUnknownParentNotFound(query);
        }


        // no matching children at all... 
        // we will treat this as if the parent is missing
        // console.log('no matching children', baseElems);
        return this.msgs.parentOfChildNotFound(query);
    }

    /**
     * parse the contents of the html file
     * returns either a valid ast or a bunch of errors
     */
    _parse() {

        let options = {
            withStartIndices: true, 
            withEndIndices: true,
            originalFile: this.file
        };

        let cb = (error, dom) => {
            // console.log('ON END HANDLER', this, error, dom);
            // add any returned errors onto the errors array
            if(error) {
                if(Array.isArray(error)) {
                    this.errors = this.errors.concat(error);
                } else if (typeof error === 'string'){
                    // if its a string that's most likely something really bad
                    // so put it into a catch-all error format with a generic hint
                    let err = merge({
                        id: utils.shortKey(),
                        fileId: this.file.id,
                        error: error,
                        hint: `The html could not be parsed correctly. Please check for errors`,
                        error: 'parser error'
                    }, error);
                } else {
                    // is object
                    this.errors.push(error);
                }
            } 
            
            this.ast = dom;
        }

        this.handler = new Handler(cb.bind(this), options);
        this.parser = new htmlparser.Parser(this.handler);
        this.parser.write(this.file.doc.getValue());
        this.parser.end();
        
        //console.log('_parse', this);

        if(!this.ast || !this.ast.length) {
            throw new Error("The HTML parser does not have a valid ast");
        }
    }


}
