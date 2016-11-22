import React,  { PropTypes } from 'react';

let getImgStyle = (img)=> {
    return {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        width: "100%"
    }
}

const ImagePanel = ({img, children, className}) => {
    return (
        <div style={getImgStyle(img)}>
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

export { ImagePanel }