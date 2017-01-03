export default class BaseParser {

    constructor(file, method) {
        this.file = file;
        this.method = method;
    }

    custom() {
        console.log('BaseParser is ', this);
        let customFunc = Function(this.method.body).bind(this);
        return customFunc();
    }

}