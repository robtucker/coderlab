export class BaseParser {


    constructor(input, functionText) {
        this.parser = Function(input, functionText);
    }
    
}