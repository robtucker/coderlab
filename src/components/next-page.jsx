import React,  { PropTypes } from 'react';
import { Link } from 'react-router';

import { typography } from "../styles";

const NextPage = ({to, label, bgColor}) => {
    return (
        <div className="bg-primary">
            <Link to={to} className="row justify-end align-center text-decoration-none overlay-hover white padding-y-md">
                <div className="text-xs-right">
                    <span style={{color: typography.textDarkWhite}}>Next</span>
                    <h3 className="marginless">{label}</h3>
                </div>
                <i className="material-icons arrow-R padding-x-sm">arrow_forward</i>
            </Link>
        </div>

    );
}   

NextPage.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export { NextPage } 
    