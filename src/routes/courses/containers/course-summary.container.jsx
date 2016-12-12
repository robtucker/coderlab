import React, { PropTypes, Component } from 'react';
import { connect } from "react-redux";
import findIndex from "lodash/findIndex";
import { Logger } from "isolog";
import { CourseSummary } from "../components/course-summary";
import { setNavbarColor } from "../../../actions";

const mapDispatchToProps = (dispatch) => ({
    setNavbarColor: (color) => {
        dispatch(setNavbarColor(color));
    }
})

const mapStateToProps = (state, ownProps) => {

    let courses = state.courses;
    let courseIndex = findIndex(courses, c =>  c.slug === ownProps.params.name); 
    let course = courses[courseIndex];
    let nextCourse = courses[courseIndex + 1];
    let relatedCourses = courses.filter(c =>  c.slug !== ownProps.params.name);

    return {
        courses,
        course,
        nextCourse,
        relatedCourses
    }
};

export const CourseSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(CourseSummary);

