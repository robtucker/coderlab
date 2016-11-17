import React, { PropTypes } from "react";

import { Link } from "react-router";

import Paper from 'material-ui/Paper';

import { typography } from "../../../styles";

const CourseCard = ({title, description, iconClass, slug}) => (
    <Link to={`courses/${slug}`}>
        <Paper className="col-xs row-md justify-center align-center padding-y-md margin-x-sm margin-y-sm flex-1" 
            style={{maxWidth: "600px"}}>
            <div className={`${iconClass} margin-bottom-sm margin-x-md border-radius-100`}></div>

            <div className="max-width-500 text-xs-center text-md-left margin-x-sm">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </Paper>
    </Link>
);

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export { CourseCard }