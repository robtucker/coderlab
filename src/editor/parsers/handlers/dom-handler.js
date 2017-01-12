import htmlparser from "htmlparser2";
import {find} from "lodash";
import {utils} from "../../../core";
import {HtmlElement} from "../elements/html-element";

// aka self-closing elements
var voidElems = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr',

    //common self closing svg elements
    'path',
    'circle',
    'ellipse',
    'line',
    'rect',
    'use',
    'stop',
    'polyline',
    'polygon'
];

const isVoidElement = (tagName) => {
    return voidElems.indexOf(tagName) !== -1;
};

// see https://github.com/fb55/domhandler
export class Handler extends htmlparser.DomHandler {
    
    constructor(cb, options, elementCB) {
        super(cb, options, elementCB);
        this._errors = [];
        this.htmlText = this._options.originalFile.contents;
        if(!this.htmlText) {
            throw new Error("The Html Parser was not given valid html");
        }
    }

    onopentag (name, attribs) {
        var element = new HtmlElement(name, attribs, this.htmlText);

        this._addDomElement(element);

        this._tagStack.push(element);

        //console.log('onopentag', name, element)
    };

    onclosetag (name){
        
        var elem = this._tagStack.pop();

        if(this._options.withEndIndices){
            elem.endIndex = this._parser.endIndex;
        }

        // fortunately whitespace is not permitted between < and /
        elem.wasClosed = this.htmlText[this._parser.startIndex + 1] === '/';

        // decide whether to add the elem to the error stack
        if(!elem.wasClosed) this.addUnclosedElementError(elem);

        //console.log('onclosetag', name, elem);

        // check it is the right tag to be closing
        if(elem.name !== name) {
            //console.log("tagNameMatchFailed");
            elem.error = "tagNameMatchFailed";
            this._errors.push(elem);
        }
    };

    onend (){
        this._checkUnclosedElements();
        this._done = true;
        //console.log('onend', this);
        this._handleCallback(this._errors); // pass the errors through to the callback
    };

    /**
     * We don't want to save new lines as separate text elements
     * This is so that we can take full advantage of the "next"" and "parent"" features
     * Otherwise the "next" or "parernt" element is pretty much always going to be a new line
     */
    ontext(data) {
        if(data.match(/^\s+$/)) return null;
        htmlparser.DomHandler.prototype.ontext.bind(this)(data);
    }

    _checkUnclosedElements() {
        // there may be unclosed elements still sitting on the tag stack
        this._tagStack.forEach((ele) => {
            //console.log('_checkUnclosedElements', ele);
            this.handler.addUnclosedElementError(ele);
        });
    }

    addUnclosedElementError(elem) {
        // if its a void element then do nothing
        if(isVoidElement(elem.name)) return null;

        // often unclosed tags come in pairs (because the slash is missing obvs)
        // so we only want to report the error once for each type of tag
        let matchingError = find(this._errors, err => err.tagName === elem.name);
        //console.log('matchingError', this.errors, matchingError);

        if(!matchingError) {
            this._errors.push({
                id: utils.shortKey(),
                fileId: this._options.originalFile.id,
                lineNumber: elem.lineNumber,
                tagName: elem.name,
                hint: `The <${elem.name}> tag at line ${elem.lineNumber} of ${this._options.originalFile.label} has not been closed correctly`,
                error: 'unclosed tag'
            });
        }
    }



}
