import RunMode from "codemirror/addon/runmode/runmode";

export class CodeParser {

    errors = [];
    res = null;
    
    constructor(fileToParse, functionText) {
        this.file = fileToParse
        this.parser = Function('input', functionText);
        this.parse();
    }

    parse() {
        this.res = this.parser(this.file);
    }

}
