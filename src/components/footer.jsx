import React, { Component } from "react";
import {Link} from "react-router";
import {palette} from "../../styles";

let footerStyles = {
    backgroundColor: palette.accent2Color
}

const Footer = ({isVisible}) => {
    
    if(!isVisible) return null;

    return (
        <div style={footerStyles} className="container">
            <div className="row justify-center align-center padding-y-lg">
                <div className="width-100">
                    <p className="margin-bottom-xs"><Link to="/contact">About</Link></p>
                    <p className="margin-bottom-xs"><Link to="/contact">Courses</Link></p>
                    <p className="margin-bottom-xs"><Link to="/contact">Mentors</Link></p>
                    <p className=""><Link to="/contact">Contact</Link></p>
                </div>
                <div className="width-100">
                    <p>email us</p>
                    <p>email us</p>
                </div>
            </div>
        </div>
    );
}

export {Footer}