import React,  { PropTypes } from 'react';

const SplitPanel = ({img, bgColor, children, reverse, className}) => {

    let getImgStyle = (img, reverse) => ({
        backgroundImage: `url(${img})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        minHeight: "200px"
    });

    let containerClasses = "col-reverse-xs justify-center align-center height-100";

    if(reverse) {
        containerClasses += " row-reverse-md"
    } else {
        containerClasses += " row-md"
    }

    if(className) {
        containerClasses += " " + className;
    }

    return (
        <div className={containerClasses} 
            style={{backgroundColor: bgColor || 'white'}}>
            <div className="width-100">{children}</div>
            <div style={getImgStyle(img, reverse)} className="width-100 flex-1"></div>
        </div>
    );
}

SplitPanel.propTypes = {
    img: PropTypes.string.isRequired
}

export { SplitPanel }