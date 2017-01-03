import { Parser } from "./parser";

/**
 * A top level compenent that performs macro 
 * operations for marking and assessing student content
 */
export class Examiner {

    errors = [];

    constructor(challenge) {

        let fileToParse;
        let parser;

        // each challenge has multiple tasks
        challenge.tasks.forEach((task) => {
            // each task has multiple parsers
            task.parsers.forEach((parser) => {
                // each parser function operates on a specific file
                fileToParse = challenge.files[parser.file];
                console.log('parsing file', fileToParse);
                // the Parser constructor takes the file input and a method object
                // the method object describes how to parse the file
                parser = new Parser(fileToParse, parser.method);

                // if it returns errors then add them to the list
                if(parser.errors && parser.errors.length) {
                    console.log('found parser errors', parser.errors);
                    this.errors.push(parser.errors);
                }

                //otherwise it means the user has completed the task
                console.log('parser returned empty', parser);
            });
        });
    }
}
