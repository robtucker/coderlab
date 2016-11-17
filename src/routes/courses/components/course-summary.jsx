import React, { PropTypes } from 'react';

import find from "lodash/find";
import { Logger } from "isolog";

import { PageContainer, LinkCard } from "../../../layouts";

import { CourseBanner } from "./course-banner";

const CourseSummary = (props) => {
    
    let course = find(props.courses, c =>  c.slug === "web");

    return (

        <div>
            <CourseBanner bannerClass={course.bannerClass} title={course.title} subtitle={course.subtitle}/>

            <PageContainer title="Course Overview">
            
                <h3 className="margin-x-sm margin-bottom-md text-xs-left">Course Overview</h3>
                
                {course.outline.map((step) => (
                    <LinkCard key={step.id} iconClass="" />
                ))}

            </PageContainer>

        </div>
    );
}

CourseSummary.propTypes = {

};

export { CourseSummary }