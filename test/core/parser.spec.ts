import { expect } from "chai";

import htmlparser from "htmlparser2";

describe('Html Parser', function() {
    it('should parse html into ast', function() {
        var rawHtml = "<html><body><div><h1>foo</h1></div></body></html>";


        var handler = new htmlparser.DomHandler(function (error, dom) {
            if (error) throw err;
            expect(dom[0].name).to.equal('html')
        });

        //console.log(Object.keys(handler));

        var parser = new htmlparser.Parser(handler);

        parser.write(rawHtml);
        parser.done();
    })
})

