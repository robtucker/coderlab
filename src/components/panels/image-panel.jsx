import React,  { PropTypes } from 'react';

let getImgStyle = (img, bgColor)=> {
    return {
        backgroundColor: bgColor,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        width: "100%"
    }
}

const ImagePanel = ({img, children, className, bgColor}) => {
    return (
        <div style={getImgStyle(img, bgColor)}>
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
    img: PropTypes.string.isRequired
}

ImagePanel.defaultProps = {
    bgColor: "white"
}

export { ImagePanel }