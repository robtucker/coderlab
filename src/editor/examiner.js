import {groupBy} from "lodash";

/**
 * A top level compenent that performs macro 
 * operations for marking and assessing student content
 */
export class Examiner {

    errors = [];

    examineAllTasks(challenge) {
        for(var i = 0; i < challenge.tasks.length; i++) {
            this.examineNthTask(challenge, i);
        };
    }

    examineNthTask(challenge, n) {
        // group the rules by fileName
        let rules = groupBy(challenge.tasks[n].rules, 'fileName');
        //console.log('rules', rules);

        // each task has multiple parsers
        Object.keys(rules).forEach((fileName) => {

            // each parser function operates on a specific file
            let fileToParse = challenge.files[fileName];
            //console.log('fileToParse', fileToParse);

            // retireve the correct parser for this file type
            let parser = this.getParser(fileToParse);
            
            rules[fileName].forEach((rule) => {
                let method = parser[rule.method].bind(parser);
                //console.log('preparing to run parser method', method);

                if(typeof method !== 'function') {
                    throw new Error(`Method not be found: ${rule.method}`);
                }

                // any truthy return value is considered to be an error message
                let res = method(rule.args);
                console.log('res', res);
                if(res) {
                    this.errors.push(Object.assign({}, rule, {error: res}));
                }
            });
        });
    }

    /**
     * Each file type has a custom parser with unique methods
     */
    getParser(file) {
        let Strategy = require('./parsers/' + file.mode + '-parser').default;
        return new Strategy(file);
    }

}
