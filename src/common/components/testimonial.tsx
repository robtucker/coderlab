import React, { PropTypes } from "react";

import { typography } from "../../styles";


let quoteStyle = {
    marginBottom: '12px',
    color: typography.textDarkBlack
}

let authorStyle = {
    marginBottom: '0px',
    color: typography.textLightBlack,
    fontSize: "16px"
}

const Testimonial = ({author, quote, imgClass}) => (
    <div className="col-xs row-md justify-center align-center padding-y-lg">
    
        <div className={`${imgClass} margin-y-sm`}></div>

        <div className="max-width-400 margin-y-sm text-center text-md-left">
            <div style={quoteStyle}>{quote}</div>
            <footer className="blockquote-footer" style={authorStyle}>{author}</footer>
        </div>

    </div>
);

Testimonial.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imgClass: PropTypes.string.isRequired,
}

export { Testimonial }