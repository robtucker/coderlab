import React, { Component } from "react";
import {Link} from "react-router";
import {palette} from "../../styles";

let footerStyles = {
    backgroundColor: palette.accent2Color
}

const Footer = ({footerVisible}) => {

    if(!footerVisible) return null;

    return (
        <div style={footerStyles} className="row height-100 justify-center align-center">
            <div className="width-100">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export {Footer}