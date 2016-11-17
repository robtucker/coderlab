import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const CourseBanner = ({bannerClass, title, subtitle}) => (
    <div className={`${bannerClass}`}>        
        <div className="row justify-start align-end white overlay-20">
            <div className="container margin-y-sm">
                <h3 className="margin-bottom-sm">{title}</h3>
                <h5 className="max-width-500">{subtitle}</h5>
                <RaisedButton label="Enrol" primary={true}/>
            </div>
        </div>
    </div>
);

CourseBanner.propTypes = {
    bannerClass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export { CourseBanner }