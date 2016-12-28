import React, { Component } from "react";
import { CompositeDecorator } from "draft-js";
import { Entity } from 'draft-js';
import { palette } from "../../styles";
import { findWithRegex } from "../helpers";

const regexes =  {
    'comment': /<!--[\w\W]*?-->/,
    'prolog': /<\?[\w\W]+?\?>/,
    'doctype': /<!DOCTYPE[\w\W]+?>/i,
    'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/gi,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'attr-value': {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    'punctuation': /[=>"']/
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': /&#?[\da-z]{1,8};/i
};

let styles = {
    tagColor: 'red',
    attrColor: 'green',
    attrValueColor: 'yellow'
}

const TagSpan = (props) => {

    let tag = props.decoratedText;

    // if(tag.charAt(1) === '/') {
    //     console.log('closing tag found', tag);
    //     return <span style={{color: styles.tagColor}}>{props.children}</span>;
    // }

    let res = [];
    let tagOpeningRegex = /<(\/?)[^>\s]+/g;

    let tagOpening = tagOpeningRegex.exec(tag);

    res.push(<span style={{color: styles.tagColor}}>{tag.substr(tagOpening.index, tagOpening[0].length)}</span>)


    console.log("tagOpening", tagOpening, tag.substr(tagOpening.index, tagOpening[0].length));

    let attrValRegex = /\s([^=]+)=('[^']+'|"[^"]+")/g

    let attrValArr = attrValRegex.exec(tag);

    console.log

    let tagClosingRegex = />/g;
    let tagClosing = tagClosingRegex.exec(tag);


    return <span>{tag}</span>
    //return <span style={{color: styles.tagColor}}>{props.children}</span>;
};

const AttrSpan = (props) => {
    return <span style={{color: styles.attrColor}}>{props.children}</span>;
}

const AttrValueSpan = (props) => {
    return <span style={{color: styles.attrColor}}>{props.children}</span>;
}

const tagStrategy = (contentBlock, callback) => {
    const text = contentBlock.getText();

    let tagRegex = /<[^>]+>/g;
    // let attrValRegex = /\s([^=]+)=('[^']+'|"[^"]+")/g

    let tagArr, start;

    // if(tagArr = tagRegex.exec(text)) {
    //     console.log('tag array', tagArr);
    //     tag = tagArr[0];
    //     if(attrArr = attrValRegex.exec(tag)) {
    //         let attrOffset = tagArr.index + attrArr.index;
    //         console.log('attr array', attrArr);
    //         console.log('attr extracted', text.substr(attrOffset));
            
    //     }
    // }

    while ((tagArr = tagRegex.exec(text)) !== null) {
        //console.log(tagArr);
        start = tagArr.index;
        callback(start, start + tagArr[0].length);
    }
}

export const HtmlDecorator = new CompositeDecorator([
    {
        strategy: tagStrategy,
        component: TagSpan,
    },
]);
