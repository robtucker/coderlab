import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';


let imageStyles = (url, background) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: "auto 100%",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundColor: background,
    height: "300px"
})

const CourseBanner = ({img, background, title, subtitle}) => (
    <div style={imageStyles(img, background)}>        
        <div className="row justify-start align-end white">
            <div className="container margin-y-md">
                <h3 className="margin-bottom-sm">{title}</h3>
                <h5 className="margin-bottom-sm">{subtitle}</h5>
                <RaisedButton label="Enrol" primary={true}/>
            </div>
        </div>
    </div>
);

CourseBanner.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    background: PropTypes.string
}

CourseBanner.defaultProps = {
    background: "white"
}

export { CourseBanner }