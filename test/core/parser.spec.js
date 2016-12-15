import { expect } from "chai";

import htmllint from "htmllint";

describe('linter', function(){

    it("should accept html string", function() {
        var html = "<html><div><h1>foo<h1></div><br></html>";
        var opts = {};

        var myLinter = new htmllint.Linter();
        
        console.log('linter is:');
        console.log(Object.keys(myLinter));

        var output = myLinter.lint(html, opts)
            .then(function(res) {
                console.log('res is');
                console.log(typeof res);
                expect(res).to.be.a('Array');
            })
        
        console.log('output is:');
        console.log(Object.keys(output));

    })
    
})

// import htmlparser from "htmlparser2";

// var rawHtml = "<div><h1>foo<h1><div>";


// var handler = new htmlparser.DomHandler(function (error, dom) {
//     if (error) {
//         console.error('error received')
//         console.error(error);
//     } else {
//         console.log('success');
//         console.log(dom);
//     }
// });

// console.log(Object.keys(handler));

// var parser = new htmlparser.Parser(handler);

// parser.parseComplete(rawHtml);


// import parse5 from 'parse5';

// // var document     = parse5.parse('<!DOCTYPE html><html><body>Hi there!</body></html>');
// var fragment = parse5.parseFragment('<td>Yo!<td>');

// console.log(fragment);

