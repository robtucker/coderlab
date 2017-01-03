// see https://github.com/fb55/htmlparser2
import htmlparser from "htmlparser2";
// domutils come with htmlparser2 - https://github.com/fb55/domutils
import {find} from "domutils";
import BaseParser from "./base-parser";

console.log('find', find);
class Handler extends htmlparser.DomHandler {

};

export default class HtmlParser extends BaseParser {

    parser = null;
    handler = null;
    ast = null;

    constructor(file, method) {
        super(file, method);
        this.setAst();
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

    hasTag (tagName) {
        let tags = find(e => e.name === tagName, this.ast, true);
        console.log(tags);
        if(!tags || !tags.length) {
            return `The ${tagName} could not be found`;
        }
    }



}

