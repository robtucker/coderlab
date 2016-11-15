import React,  { PropTypes } from 'react';

const ImagePanel = ({imgClass, children, className, bgColor}) => {
    return (
        <div className={imgClass} style={{backgroundColor: bgColor || "white"}}>
            <div className={`width-100 height-100 ${className}`}>
                <div className="row justify-center align-center height-100">
                    <div className="text-xs-center padding-x-sm margin-y-xxl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

ImagePanel.propTypes = {
    imgClass: PropTypes.string.isRequired
}

export { ImagePanel }