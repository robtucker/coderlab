import {utils} from "../../core/utils";
import {find, groupBy} from "lodash";

const elemLabels = {
    html: 'html',
    body: 'body',
    meta: 'meta attribute',
    title: 'title',
    a: 'anchor',
    h1: 'header',
    h2: 'header',
    h3: 'header',
    h4: 'header',
    h5: 'header',
    h6: 'header',
    ul: 'unordered list',
    ol: 'ordered list',
    li: 'list item',
    section: 'section',
    div: 'section',
    br: 'break',
    link: 'link',
    span: 'span'
}

export class HtmlErrors {

    constructor(file) {
        this.file = file;
    }

    /**
     * basic error reporting - just describe what's missing
     */
    elemNotFound(query) {
        console.log('elemNotFound', query);
        let location = this._getLocationDesc(query);
        let tagLabel = query.tagName ? `${utils.getTagNameArticle(query.tagName)} <${query.tagName}> tag` : false;
        let errText;

        if(tagLabel && query.textNode) {
            // represents a list of text node operators that affect the error messaging (currently just 'exists')
            if(!query.textNode.opr || ['exists'].indexOf(query.textNode.opr) === -1) {
                errText = `There should be ${tagLabel} for ${this._getTextNodeDesc(query.textNode)} ${location}`;
            } else {
                errText = `There should be ${tagLabel} for the ${this._getElemLabel(query.tagName)} ${location}`;
            }
        } else if(tagLabel && query.prevSibling && query.prevSibling.textNode) {
            let prev = this._getATagDesc(query.prevSibling.tagName)
            return `The next element after the ${prev} should be ${tagLabel}`;
        } else if(tagLabel && query.nextSibling && query.nextSibling.textNode) {
            let next = this._getATagDesc(query.nextSibling.tagName)
            return `The element before ${next} should be ${$tagLabel}`
        } else if(tagLabel && query.parent && query.parent.tagName) {
            return `The ${parent} should contain ${tagLabel}`;
        } else if(query.attrs) {
            errText = `Could not find ${tagLabel || 'an element'} with ${this._getAttrsDesc(query)}`
        } else if(query.textNode){
            this._getTextNodeDesc(query.textNode)
            errText = `Could not find a matching tag with ${this._getTextNodeDesc(query.textNode)}`
        } else if (tagLabel) {
            errText = `There should be ${tagLabel}`;
        } else {
            errText = `You are missing an element`
        }
        return errText;
    }

    elemInWrongPlace(query, existingElems) {
        console.log('elemInWrongPlace', existingElems.length, existingElems);
        let desiredRelative;
        let desiredTag = `${this._getATagDesc(query.tagName)}`;

        // only bother doing this if we have tagNames to work with
        if(!query.tagName){
            return this.elemNotFound(query);
        } else if(query.parent && query.parent.tagName) {
            desiredRelative = `as a child of the ${this._getTagDescWithLoc(query.parent)}`;
        } else if (query.prevSibling && query.prevSibling.tagName) {
            desiredRelative = `after the ${this._getTagDescWithLoc(query.prevSibling)}`;
        } else if (query.nextSibling && query.nextSibling.tagName) {
            desiredRelative = `before the ${this._getTagDescWithLoc(query.nextSibling)}`;
        } else {
            return this.elemNotFound(query);
        }


        let existingDesc = existingElems.length === 1 && existingElems[0].name ? 
            `is ${this._getAnElemDescWithLoc(existingElems[0])}`: `are multiple <${query.tagName}> tags`;

        return `There ${existingDesc}, but what we're looking for is ${desiredTag} ${desiredRelative}`;

    }

    elemMayNotHaveAttrs(query, existingElems) {
        console.log('elemMayNotHaveAttrs', query, existingElems);
        let desiredAttrs = this._getAttrsDesc(query);
        let desiredTag = `${this._getATagDesc(query.tagName)}`;
        // let existingDesc = existingElems.length === 1 && existingElems[0].name ? 
        //     `is ${this._getAnElemDescWithLoc(existingElems[0])}`: `are multiple <${query.tagName}> tags`;
        // return `There ${existingDesc}, but we're looking for ${desiredTag} with ${desiredAttrs}`;
        return `We're looking for ${desiredTag} with ${desiredAttrs}`;

    }

    elemMayNotHaveText(query, existingElems) {
        console.log('elemMayNotHaveText', query, existingElems);
        let desiredText = this._getTextNodeDesc(query.textNode);
        let desiredTag = `${this._getATagDesc(query.tagName)}`;
        let existingDesc = existingElems.length === 1 && existingElems[0].name ? 
            `is ${this._getAnElemDescWithLoc(existingElems[0])}`: `are multiple <${query.tagName}> tags`;
        return `There ${existingDesc}, but we're looking ${desiredTag} that contains ${desiredText}`;
    }

    /**
     * 
     */
    parentOfChildNotFound(query) {
        console.log('parentOfChildNotFound', query);
        // describe the first child that should have existed
        let container = this._getATagDesc(query.tagName) || 'an element';
        let child = this._getChildDesc(query.children);

        if(query.prevSibling && query.prevSibling.tagName && query.prevSibling.textNode) {
            let prev = `the <${query.prevSibling.tagName}> tag ${this._getLocationDesc(query.prevSibling)}`;

            return `The next element after ${prev} should be ${container} that contains ${child}`
        }

        return `I'm looking for ${container} that contains ${child}`
    }

    childIsOutsideParent(parent, childArray, childQuery) {
        console.log('childIsOutsideParent', parent, childArray, childQuery)
        if(childArray.length === 1) {
            let childDesc = this._getElemDescWithLoc(childArray[0]);
            let parentDesc =this._getElemDescWithLoc(parent)
            return `Hold up... there is a ${childDesc} but it should be inside the ${parentDesc}.`;
        } else {
            return this.childOfParentDoesNotExist(parent, childQuery);
        }

    }

    childOfParentDoesNotExist(parent, childQuery) {
        //describe the error in terms of the child
        // if(childQuery.tagName && childQuery.textNode) {
        //     return `Create ${this._getATagDesc(childQuery.tagName)} for ${this._getTextNodeDesc(childQuery.textNode)} on ${this._getLocationDesc(childQuery)}`
        // }

        let parentDesc = this._getElemDescWithLoc(parent);
        let childDesc = childQuery.tagName ? this._getATagDesc(childQuery.tagName) : 'the correct child element';
        let desc = `The ${parentDesc} should contain ${childDesc}`;
        if(childQuery.textNode) desc += ` with ${this._getTextNodeDesc(childQuery.textNode)}`
        console.log('childOfParentNotFound', desc);
        return desc;
    }

    /**
     * in this scenario try to include a next and prev element to make things easier
     */
    childOfUnknownParentNotFound(query) {
        console.log('childOfUnknownParentNotFound', query)
        let desc = this._getChildDesc(query.children);

        if(query.prevSibling && query.prevSibling.tagName && query.prevSibling.textNode) {
            let next = `The element after the <${query.prevSibling.tagName}> tag ${this._getLocationDesc(query.prevSibling)}`;
            return `${next} should be ${desc}`
        }
 
        if(query.nextSibling && query.nextSibling.tagName && query.nextSibling.textNode) {
            let prev = `The element before the <${query.nextSibling.tagName}> tag ${this._getLocationDesc(query.nextSibling)}`;
            return `${prev} should be ${desc}`
        }

        if(query.tagName) {
            return `I'm looking for ${this._getATagDesc(query.tagName)} that contains ${desc}`
        }
    }

    /**
     * Turn an array of query objects into a string description
     * 
     * @param {array} childArray
     * @returns {string}
     */
    _getChildDesc(childArray) {
        let desc = '';
        if(childArray.length === 1) {
            let tagName = query.childArray[0].tagName;
            let desc = tagName ?  `${utils.getTagNameArticle(tagName)} <${tagName}> tag` : 'a child element';
            if(query.children[0].textNode) desc += ` with ${this._getTextNodeDesc(query.children[0].textNode)}`
            return desc;
        } else {
            let grouped = groupBy(childArray, 'tagName');
            let groupedKeys = Object.keys(grouped);
            console.log('groupedKeys', grouped, groupedKeys)
            if(groupedKeys.indexOf('undefined') !== -1) {
                throw new Error('Describing multiple children with unnamed tags is not currently supported');
            }

            for(var i = 0; i < groupedKeys.length; i++) {
                let count = grouped[groupedKeys[i]].length;
                desc += `${i > 0 ? ' and ' : ''}${utils.numToWords(count)} <${groupedKeys[i]}> tag${count > 1 ? 's' : ''}`
            };
        }
        return desc;
    }

    /**
     * Get the line number for any text
     * 
     * @param {string} searchText
     */
    _getLineNumber(searchText) {
        return utils.getLineNumber(this.file.contents, searchText);
    }

    /**
     * Turn the line number into a pretty string
     */
    _getLocationDesc(query) {
        return query.textNode ? `on line ${this._getLineNumber(query.textNode.val)} of ${this.file.label}` : false;
    }

    _getTagDescWithLoc(query) {
        let res = `<${query.tagName}> tag`;
        if(query.textNode) res += ` ${this._getLocationDesc(query.textNode)}`;
        return res;
    }

    /**
     * @param {string} tagName
     */
    _getATagDesc(tagName) {
        return tagName ? `${utils.getTagNameArticle(tagName)} <${tagName}> tag` : false;
    }

    /**
     * @param {query}
     */
    _getAttrsDesc(query) {
        //let location = this._getLocationDesc(query);
        let attrErrs = query.attrs.map((attr) => {
            return `${utils.addIndefiniteArticle(attr[0])} attribute of ${attr[2]}`;
        });
        return attrErrs.join(' and ');
    }

    /**
     * @param {string} textNode
     */
    _getTextNodeDesc(textNode) {
        // if the text node is just supposed to exist then we can't describe it well
        if(textNode.opr === 'exists') return 'any text of your choosing';

        // if the text node is longer than 3 words then we will shorten it
        let strArr = utils.strToArray(textNode.val);
        let shortened = strArr.length > 3 ? `"${strArr.slice(0, 3).join(' ')}..."` : `"${textNode.val}"`;
        return 'the text ' + shortened;
    }

    /**
     * Get the nice description of an element
     * 
     * @param {string} tagName
     */
    _getElemLabel(tagName) {
        return elemLabels[tagName];
    }

    /**
     * @param {HtmlElement}
     */
    _getElemDescWithLoc(elem) {
        return `<${elem.name}> tag on line ${elem.lineNumber}`
    }

    _getAnElemDescWithLoc(elem) {
        return `${utils.getTagNameArticle(elem.name)} ${this._getElemDescWithLoc(elem)}`
    }

}
