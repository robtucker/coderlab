import React, { PropTypes } from "react";

const Icon = ({imgClass, label, labelClass}) => {
    
    return (
        <div className="width-100 flex-1 margin-bottom-md">
            <div className="column align-center">
                <div className="row justify-center">
                    <div className={`icon-md ${imgClass}`}></div>
                </div>
                <div className={labelClass}> {label} </div>
            </div>
        </div>

    );
};

Icon.propTypes = {
    imgClass: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export { Icon };