import React,  { PropTypes } from 'react';
import { Link } from 'react-router';

const ArrowBox = ({url, text, color}) => {

    let hoverClass = color === "white" ? "bg-hover-white" : "hover-invert";
    let borderStyle = `2px solid ${color}`;

    return (
        <div className="row justify-center align-center" style={{color: color || "white"}}>
            <Link to={url} className={`text-decoration-none ${color}`}> 
                <div className={`text-xs-center padding-y-sm padding-x-md ${hoverClass}`} 
                    style={{border: borderStyle}}>
                    <div className="row align-center font-size-lg">
                        <span>{text}</span>&nbsp;&nbsp;<i className="material-icons arrow-R">arrow_forward</i>
                    </div>
                </div>

            </Link>

        </div>

    );
}

ArrowBox.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

ArrowBox.defaultProps = { 
    text: 'Find out more',
    color: 'white' 
};

export { ArrowBox }