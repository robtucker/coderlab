/**
 * The Parser class is an adapter.
 * It wraps the specific parsing strategy required for each file type
 */
export class Parser {
    /**
     * File object including metadata
     */
    file;

    /**
     * A specific strategy for traversing the doc
     */
    parser;

    /**
     * A list of errors to return to the examiner
     */
    errors = [];

    constructor(fileToParse, method) {
        this.file = fileToParse
        this.method = method;

        let parserFunc = this.getParser()[method.type].bind(this.parser);

        console.log('parser has generated the function', parserFunc);

        if(typeof parserFunc !== 'function') {
            return this.methodNotFound();
        }

        let res = parserFunc(method.args);

        // any return is considered to be an error
        if(res) {
            this.errors.push({method, res});
        }

        console.log('parserFunc has successfully executed', res);

    }
    
    methodNotFound() {
        throw new Error(`Method not be found: ${this.method.type}`);
    }

    /**
     * Each file type has a custom parser
     * that builds an ast for that file type
     */
    getParser() {
        if(this.parser) return this.parser;
        //console.log('finding strategy', './parsers/' + this.file.mode + '-parser')
        let Strategy = require('./parsers/' + this.file.mode + '-parser').default;
        //console.log(Strategy);
        return this.parser = new Strategy(this.file, this.method);
    }
}
 
