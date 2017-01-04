export default class TextParser {

    constructor(file) {
        this.file = file;
    }

    custom() {
        let customFunc = Function(this.method.body).bind(this);
        return customFunc();
    }

}