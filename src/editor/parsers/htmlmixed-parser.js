// see https://github.com/fb55/htmlparser2
import htmlparser from "htmlparser2";
// domutils come with htmlparser2 
// https://github.com/fb55/domutils
import {find} from "domutils";
import TextParser from "./text-parser";

class Handler extends htmlparser.DomHandler {

};

export default class HtmlParser extends TextParser {

    parser = null;
    handler = null;
    ast = null;

    constructor(file, methods) {
        super(file, methods);
        this.setAst();
        console.log('initialized parser', this)
    }

    setAst() {
        this.handler = new Handler((error, dom) => {
            if (error) {
                console.error('error received')
                console.error(error);
                throw error;
            } else {
                console.log('returning dom', dom, this);
                return dom;
            }
        });

        this.parser = new htmlparser.Parser(this.handler);
        this.parser.write(this.file.doc.getValue());

        if(!this.handler.dom || !this.handler.dom.length) {
            return {error: "The HTML could not be parsed"};
        }

        return this.ast = this.handler.dom;
    }

    /**
     * expects a query object such as:
     * {
     *     name: 'h1'                  // the tag name
     *     text: 'text node value',    // text node value
     *     href: 'http;//example.com'  // href attribute
     *     foo: 'bar'                  // any custom attribute
     * }
     */
    hasTag (query) {
        let nonAttrKeys = ['name', 'text'];
        let queryAttrs = Object.keys(query).filter(k => nonAttrKeys.indexOf(k) === -1);
        console.log('queryAttrs', queryAttrs)
        let cb = (ele) => {
            if(query.name && ele.name !== query.name) return false;
            if(query.text && ele.type === 'text' && ele.data !== query.text) return false;
            if(queryAttrs && queryAttrs.length) {
                let elementAttrs = Object.keys(ele.attribs);
                console.log('elementAttrs', elementAttrs)
                queryAttrs.forEach((attr) => {
                    if(elementAttrs.indexOf(attr) === -1) return false;
                });
            }
            return true;
        }
        
        let tags = find(cb, this.ast, true);

        console.log('tags', tags);

        if(!tags || !tags.length) {
            return "Tag could not be found"
        }
        return false;
    }



}

