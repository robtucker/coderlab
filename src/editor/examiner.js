import {find, findIndex, groupBy} from "lodash";

/**
 * A top level compenent that performs macro 
 * operations for marking and assessing student content
 */
export class Examiner {

    /**
     * Common errors not specific to any task
     */
    parserErrors = [];

    /**
     * Errors that are specific to each task
     */
    taskErrors = [];

    /**
     * A map of parsers for each file in this challenge
     */
    parsers = {};

    constructor(challenge) {
        this._challenge = challenge;
        this.parserErrors = [];
        this.parseFiles();
    }

    parseFiles() {
        this._challenge.files.forEach((file) => {
            // parse each file
            this.parsers[file.id] = this.getParser(file);
            // merge all the errors into the parserErrors array
            if(this.parsers[file.id].errors && this.parsers[file.id].errors.length) {
                this.parserErrors = this.parserErrors.concat(this.parsers[file.id].errors);
            }
        });
    }

    getNextTask() {
        // returns the first task that has one or more errors associated with it
        // or the last task if all tasks are complete

        let firstError = findIndex(this.taskErrors, t => t.length > 0);
        //console.log('getNextTask', firstError, this.taskErrors);
        return  firstError !== -1 ? firstError : this._challenge.tasks.length;
    }

    examineAllTasks() {
        for(var n = 0; n < this._challenge.tasks.length; n++) {
            this.examineNthTask(n);
        };
    }

    examineTasksUpTo(n) {
        for(var i = 0; i <= n; i++) {
            this.examineNthTask(i);
        };       
    }

    examineNthTask(n) {
        // console.log('examineNthTask', this.challenge.tasks, n);
        // group the rules by fileId
        let rules = groupBy(this._challenge.tasks[n].rules, 'fileId');
        //console.log('rules', rules);
        
        // an array of errors representing this task
        this.taskErrors[n] = []
        // each task has multiple parsers
        Object.keys(rules).forEach((fileId) => {

            // retireve the correct parser for this file type
            let parser = this.parsers[fileId];
                        
            if(!parser) {
                throw new Error(`A valid parser was not supplied for the file ${fileId}`);
            }

            // now check the rules specific to this task
            rules[fileId].forEach((rule) => {
                //console.log('create parser method', rule);
                let method = parser[rule.method].bind(parser);
                //console.log('preparing to run parser method', method);
                if(typeof method !== 'function') {
                    throw new Error(`Method not found: ${rule.method}`);
                }
                // any truthy return value is considered to be an error message
                let res = method(rule.args);
                //console.log('res', res);
                if(res) {
                    this.taskErrors[n].push(Object.assign({}, rule, {error: res}));
                }
            });
            
        });
    }

    /**
     * Each file type has a custom parser with unique methods
     */
    getParser(file) {
        let Strategy = require('./parsers/' + file.mode + '-parser').default;

        if(!Strategy) {
            throw new Error(`No parsing strategy was provided for the ${file.mode} mode`);
        }

        return new Strategy(file);
    }

}
