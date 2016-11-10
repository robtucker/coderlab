import React, { PropTypes } from "react";


const JobIcon = ({imgClass, label}) => {
    
    return (
        <div className="width-100 flex-1">
            <div className="column align-center">
                <div className={imgClass}></div>
                <div> {label} </div>
            </div>
        </div>

    );
};

JobIcon.propTypes = {
    imgClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export { JobIcon };