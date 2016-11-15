import React,  { PropTypes } from 'react';

import { textColors } from "../../styles";

let authorStyle = {textColor: textColors.lightBlack};

const Quote = ({text, author}) => {
    return (
        <div className="row justify-center text-xs-left">
            <div className="">
                <blockquote className="blockquote">
                    <p>{text}</p>
                    <footer className="blockquote-footer" style={authorStyle}>{author}</footer>
                </blockquote>
            </div>
        </div>
    );
}

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export { Quote }