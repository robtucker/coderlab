import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router'

import findIndex from "lodash/findIndex";
import { Logger } from "isolog";

import { CourseSummary } from "../components/course-summary";

class CourseSummaryContainer extends Component {

    componentWillMount() {

        Logger.debug('initiating course summary');
        Logger.debug(this);

        let courseIndex = findIndex(this.props.courses, c =>  c.slug === this.props.params.name); 

        if(courseIndex === -1) {
            Logger.debug('invalid course detected');
            return this.props.router.push("abort/404");
        }

        this.course = this.props.courses[courseIndex];
        this.nextCourse = this.props.courses[courseIndex + 1];
        this.relatedCourses = this.props.courses.filter(c =>  c.slug !== this.props.params.name);
    }

    openLoginDialog() {
        
    }

    closeLoginDialog() {

    }

    render() {
        // for some reason is still trying to render invalid courses
        // despite the fact it has been instructed to redirect in the mounting phase
        if(!this.course) { return null; }

        // 
        return <CourseSummary 
            course={this.course} 
            nextCourse={this.nextCourse} 
            relatedCourses={this.relatedCourses} />
    }
}


export { CourseSummaryContainer }