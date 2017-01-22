import React, { PropTypes, Component } from 'react';
import { connect } from "react-redux";
import {browserHistory} from "react-router";
import {findIndex} from "lodash";
import { breakpoints } from "../../../styles";
import {utils} from "../../../core/utils";
import {authService} from "../../../core/auth-service";
import { Logger } from "isolog";
import { CourseSummary } from "../components/course-summary";
import { setNavbarColor, toggleEnrolDialog, setAuthRedirect, putUserCourse } from "../../../actions";

const mapDispatchToProps = (dispatch) => ({
    setNavbarColor: (color) => dispatch(setNavbarColor(color)),
    toggleEnrolDialog: () => dispatch(toggleEnrolDialog()),
    setAuthRedirect: (url) => dispatch(setAuthRedirect(url)),
    startCourse: (course) => {

        let now = utils.timestamp();
        let data = {
            [course.id]: {
                dateStarted: now,
                levels: {
                    [course.levels[0].id]: {
                        dateStarted: now,
                    }
                }
            }
        };

        let req = putUserCourse(data);

        let redirect;
        switch(course.type) {
        case 'individual':
            redirect = `courses/${course.slug}/payment`;
            break;
        case 'web':
            redirect = `courses/${course.slug}/level/1/1`;
            break;
        default:
            throw new Error("The course did not specify a valid type")

        }

        req.then(u => browserHistory.push(redirect));
    }
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
        isMobile: state.app.width < breakpoints.md,
    }
};

export const CourseSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(CourseSummary);
