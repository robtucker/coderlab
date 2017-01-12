import * as ElementType from "domelementtype";

export class HtmlElement {

    _lineNumber = false;

    constructor(name, attribs, src) {
        this.src = src;
        this.type = name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag;
        this.name = name;
        this.attribs = attribs;
        this.children = [];
        // tags that fire the onclose event will have a boolean value for the wasClosed property
        // if it remains undefined that means the tag is still sitting unprocessed on the tag stack
        this.wasClosed = undefined;
    }

    /**
     * @return {number}
     */
    get lineNumber () {
        return this._lineNumber || this._setLineNumber();
    }

    /**
     * @return {number}
     */
    _setLineNumber() {
        let i = this.src.substr(0, this.startIndex);
        return this._lineNumber = (i.match(/\n/g) || []).length + 1;
    }

}