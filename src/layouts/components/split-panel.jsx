import React,  { PropTypes } from 'react';

const SplitPanel = ({imgClass, bgColor, children, reverse, className}) => {

    let containerClasses = "col-reverse-xs justify-center align-center height-100";

    if(reverse) {
        containerClasses += " row-reverse-md"
    } else {
        containerClasses += " row-lg"
    }

    if(className) {
        containerClasses += " " + className;
    }

    return (
        <div className={containerClasses} 
            style={{backgroundColor: bgColor || 'white'}}>
            <div className="width-100">{children}</div>
            <div className={`${imgClass} width-100 flex-1`}></div>
        </div>
    );
}

SplitPanel.propTypes = {
    imgClass: PropTypes.string.isRequired
}

export { SplitPanel }