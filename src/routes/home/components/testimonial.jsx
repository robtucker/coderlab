import React from "react";

import { textColors } from "../../../styles";

export const Testimonial = ({data}) => {

    let quoteStyle = {
        marginBottom: '12px',
        color: textColors.darkBlack
    }

    let authorStyle = {
        marginBottom: '0px',
        color: textColors.lightBlack,
        fontSize: "16px"
    }

    return (
        <div className="col-xs row-md justify-center align-center padding-y-lg">
        
            <div className={`${data.imgClass} margin-y-sm`}></div>

            <div className="max-width-400 margin-y-sm text-xs-center text-md-left">
                <div style={quoteStyle}>{data.quote}</div>
                <footer className="blockquote-footer" style={authorStyle}>{data.author}</footer>
            </div>

        </div>
    );
};