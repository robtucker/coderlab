import React, { PropTypes, Component } from 'react';
import { connect } from "react-redux";
import findIndex from "lodash/findIndex";
import { Logger } from "isolog";
import { CourseSummary } from "../components/course-summary";
import { setNavbarColor, toggleEnrolDialog, setAuthRedirect, startCourse } from "../../../actions";

const mapDispatchToProps = (dispatch) => ({
    setNavbarColor: (color) => {
        dispatch(setNavbarColor(color));
    },
    toggleEnrolDialog: () => {
        dispatch(toggleEnrolDialog());
    },
    startCourse
});

const mapStateToProps = (state, ownProps) => {

    let courses = Object.values(state.courses.byName);
    let courseIndex = findIndex(courses, c =>  c.slug === ownProps.params.name); 
    let course = courses[courseIndex];
    let nextCourse = courses[courseIndex + 1];
    let relatedCourses = courses.filter(c =>  c.slug !== ownProps.params.name);

    return {
        courses,
        course,
        nextCourse,
        relatedCourses,
        enrolDialogOpen: state.courses.enrolDialogOpen,
        isLoggedIn: state.auth.isLoggedIn,

    }
};

export const CourseSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(CourseSummary);
