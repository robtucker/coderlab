import {utils} from "../../core";
import {find, groupBy} from "lodash";

const elemLabels = {
    html: 'html',
    body: 'body',
    meta: 'meta attribute',
    title: 'title',
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
        let location = this._getLocationDesc(query);
        let tagLabel = query.tagName ? `${utils.getTagNameArticle(query.tagName)} <${query.tagName}> tag` : false;
        let errText;

        if(tagLabel && query.textNode) {
            errText = `There should be ${tagLabel} for the ${this._getElemLabel(query.tagName)} ${location}`;
        } else if(query.attrs) {
            let attrErrs = Object.keys(attrs).map((attrKey) => {
                return `${utils.addIndefiniteArticle(attrKey)} attribute of ${attrs[attrKey]} ${location}`;
            });

            errText = `Could not find ${tagLabel || 'an element'} with ${attrErrs.join(' and ')}${location}`
        } else if(query.textNode){
            this._getTextNodeDesc(query.textNode)
            errText = `Could not find a matching tag with the text ${this._getTextNodeDesc(query.textNode)}`
        } else if (tagLabel) {
            errText = `There should be a ${tagLabel}`;
        } else {
            errText = `You are missing an element`
        }
        
        return errText;
    }

    /**
     * 
     */
    parentOfChildNotFound(query) {
        console.log('parentOfChildNotFound', query);
        // describe the first child that should have existed
        let desc = this._getChildDesc(query.children);
        return `I'm looking for ${this._getTagDesc(query.tagName) || 'an element'} that contains ${desc}`
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
        //     return `Create ${this._getTagDesc(childQuery.tagName)} for the text ${this._getTextNodeDesc(childQuery.textNode)} on ${this._getLocationDesc(childQuery)}`
        // }

        let parentDesc = this._getElemDescWithLoc(parent);
        let childDesc = childQuery.tagName ? this._getTagDesc(childQuery.tagName) : 'the correct child element';
        let desc = `The ${parentDesc} should contain ${childDesc}`;
        if(childQuery.textNode) desc += ` with the text ${this._getTextNodeDesc(childQuery.textNode)}`
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
            return `I'm looking for ${this._getTagDesc(query.tagName)} that contains ${desc}`
        }
    }

    /**
     * 
     */
    _getChildDesc(childArray) {
        let desc = '';
        if(childArray.length === 1) {
            let tagName = query.childArray[0].tagName;
            let desc = tagName ?  `${utils.getTagNameArticle(tagName)} <${tagName}> tag` : 'a child element';
            if(query.children[0].textNode) desc += ` with the text ${this._getTextNodeDesc(query.children[0].textNode)}`
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
     */
    _getLineNumber(searchText) {
        return utils.getLineNumber(this.file.contents, searchText);
    }

    /**
     * Turn the line number into a pretty string
     */
    _getLocationDesc(query) {
        return query.textNode ? `on line ${this._getLineNumber(query.textNode)} of ${this.file.label}` : false;
    }

    /**
     * Get the nice description of an element
     */
    _getElemLabel(tagName) {
        return elemLabels[tagName];
    }

    _getElemDescWithLoc(elem) {
        return `<${elem.name}> tag on line ${elem.lineNumber}`
    }

    _getTagDesc(tagName) {
        return tagName ? `${utils.getTagNameArticle(tagName)} <${tagName}> tag` : false;
    }

    _getTextNodeDesc(textNode) {
        // if the text node is longer than 3 words then we will shorten it
        let strArr = utils.strToArray(textNode);
        return strArr.length > 3 ? `"${strArr.slice(0, 3).join(' ')}..."` : `"${textNode}"`;
    }
}
