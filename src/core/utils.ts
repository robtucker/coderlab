import {mergeWith, isObject} from "lodash";

const deepMerge = (object, source) => {
    return mergeWith(object, source, (objValue, srcValue) => {
        //console.log('COMPARING', objValue, srcValue);
        if(isObject(objValue) && srcValue) {
            return deepMerge(objValue, srcValue);
        }
    });
}

const deepMergeArrayConcat = (object, source) => {
    return mergeWith(object, source, (objValue, srcValue) => {
        //console.log('COMPARING', objValue, srcValue);
        if(Array.isArray(objValue) && Array.isArray(srcValue)) {
            return objValue.concat(srcValue);
        } else if(isObject(objValue) && srcValue) {
            return deepMergeArrayConcat(objValue, srcValue);
        } 
    });
}

const addIndefiniteArticle = (text) => {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(text.charAt(0)) === -1 ? 'a ' + text : 'an ' + text;
}

const getTagNameArticle = (text) => {
    // the indefinite article for desciribing tag names 
    // has h instead of u, e.g. a <ul> tag or an <h1> tag
    return ['a', 'e', 'i', 'o', 'h'].indexOf(text.charAt(0)) === -1 ? 'a' : 'an';
}

// todo - do this properly later
const numToWords = (num) => {
    let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    return words[num]
}

const countWords = (str) => {
    return str.split(/\s+/).length;
}

const strToArray = (str) => {
    return str.split(/\s+/);
}

/**
 * no native strdup for js as far as I am aware
 */
const strdup = (str) => {
    return (" " + str).substr(1);
}

const getLineNumber = (haystack, needle) => {
    let i = haystack.indexOf(needle);

    // maybe it simply isn't there
    if(i === -1) return i;

    // line endings have already been normalized in challenge.reducer
    return (haystack.substr(0, i).match(/\n/g) || []).length + 1;
};

const evalQueryOperator = (subj, operator, val) => {
    //console.log('evalQueryOperator', subj.indexOf(val))
    switch(operator) {
    case '=':
    case '==':
    case '===':
    case 'equals':
        return subj === val;
    case 'indexOf':
    case 'contains':
        return subj.indexOf(val) !== -1;
    case 'exists':
        return subj ? true : false;
    case '>':
    case 'greaterThan':
        return subj > val;
    case '<':
    case 'lessThan':
        return subj < val;
    case '<=':
        return subj <= val;
    case '>=':
        return subj >= val;
    }
}

// 4 char key is fine for ephemeral data like notifications
const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

const shortKey = () => {
    return s4() + s4();
}

// still pretty quick compared to using some crypto lib i guess
const guid = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const base64Encode = (str) => {
    if(btoa) return btoa(str);
    return new Buffer(str).toString('base64')
}

const base64Decode = (str) => {
    if(atob) return atob(str);
    return new Buffer(str, 'base64').toString('ascii')
}

const timestamp = () => {
    return Math.floor(+new Date() / 1000)
}

export const utils = {
    deepMerge,
    deepMergeArrayConcat,
    addIndefiniteArticle,
    getTagNameArticle,
    numToWords,
    countWords,
    strToArray,
    strdup,
    getLineNumber,
    evalQueryOperator,
    s4,
    shortKey,
    guid,
    base64Encode,
    base64Decode,
    timestamp
}