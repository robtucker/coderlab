import React, { PropTypes } from "react";
import { typography } from "../../styles";

let avatarStyle = (url) => ({
    backgroundImage:`url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100px",
    width: "100px",
    borderRadius: "100%",
    marginRight: "12px"
})

let titleStyle = {
    marginBottom: '12px',
    color: typography.textDarkBlack,
    fontSize: '18px'
}

let subtitleStyle = {
    marginBottom: '0px',
    color: typography.textLightBlack,
    fontSize: "16px"
}

const CourseInstructor = ({img, title, subtitle}) => (
    <div className="col-xs row-md justify-start align-center">

        <div className={`margin-y-sm`} style={avatarStyle(img)}></div>

        <div className="max-width-400 margin-y-sm text-center text-md-left">
            <h6 style={{color: typography.textLightBlack}}>Course Instructor</h6>
            <div style={titleStyle}>{title}</div>
            {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
        </div>

    </div>
)

CourseInstructor.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export { CourseInstructor }