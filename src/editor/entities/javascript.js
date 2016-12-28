import { clike } from "./clike";
import { findWithRegex } from "../helpers";

// see https://github.com/PrismJS/prism/tree/gh-pages/components
const regexes = {
    'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}

let keywordStyles = {
    color: 'red'
}

const KeywordSpan = (props) => {
    return <span {...props} style={keywordStyles}>{props.children}</span>;
};

function keywordStrategy(contentBlock, callback) {
    findWithRegex(regexes.keyword, contentBlock, callback);
}