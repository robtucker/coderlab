import React,  { PropTypes } from 'react';
import { Link } from 'react-router';

const ArrowBox = ({text}) => {
    return (
        <div className="row justify-center align-center">
            <Link to="/about" className="text-decoration-none white"> 
                <div className="text-xs-center padding-y-sm padding-x-md bg-hover-white" style={{border: "2px solid white"}}>
                    <div className="row align-center font-size-lg">
                        <span>{text}</span>&nbsp;&nbsp;<i className="material-icons arrow-R">arrow_forward</i>
                    </div>
                </div>

            </Link>

        </div>

    );
}

ArrowBox.propTypes = {
    text: PropTypes.string.isRequired
}

export { ArrowBox }