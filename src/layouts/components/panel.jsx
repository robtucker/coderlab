import React,  { PropTypes } from 'react';

const Panel = ({imgClass, children}) => {
    return (
        <div className={imgClass}>
            <div className="overlay-50 width-100 height-100 white">
                <div className="row justify-center align-center height-100">
                    {children}
                </div>
            </div>
        </div>
    );
}

Panel.propTypes = {
    imgClass: PropTypes.string.isRequired
}

export { Panel }