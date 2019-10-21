import React,  { PropTypes } from 'react';

import { typography } from "../styles";

let authorStyle = {textColor: typography.textLightBlack};

const Quote = ({text, author}) => {
    return (
        <div className="">
            <blockquote className="blockquote">
                <p>{text}</p>
                <footer className="blockquote-footer font-size-lg" style={authorStyle}>{author}</footer>
            </blockquote>
        </div>
    );
}

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export { Quote }