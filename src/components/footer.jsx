import React, { Component } from "react";
import {Link} from "react-router";
import {palette} from "../styles";

let footerStyles = {
    //backgroundColor: palette.accent2Color
    borderTop: `1px solid ${palette.accent2Color}`
}

let linkStyle = {
    color: palette.accent3Color
}

const Footer = ({isHidden}) => {
    
    if(isHidden) return null;

    return (
        <div className="container">
            <div className="row justify-end align-start padding-y-sm" style={footerStyles}>
                <p className="margin-x-xs"><Link to="/about" className="grey-link">About</Link></p>
                <p className="margin-x-xs"><Link to="/courses" className="grey-link">Courses</Link></p>
                <p className="margin-x-xs"><Link to="/contact" className="grey-link">Contact</Link></p>
            </div>
        </div>
    );
}

export {Footer}