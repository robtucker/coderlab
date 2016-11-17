import React, { PropTypes } from 'react';
import find from "lodash/find";
import { Logger } from "isolog";
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import { PageContainer, LinkCard, SidebarLayout } from "../../../layouts";
import { CourseBanner } from "./course-banner";

const CourseSummary = (props) => {
    
    let course = find(props.courses, c =>  c.slug === props.params.name);

    let otherCourses = find(props.courses, c =>  c.slug !== props.params.name);

    console.log(otherCourses);

    let sidebar = (
        <section>
            <h5>Who's teaching this course</h5>
            <h5>Other courses</h5>
            <List>
                <ListItem />
            </List>
        </section>

    );

    return (
        <div>
            <CourseBanner bannerClass={course.bannerClass} title={course.title} subtitle={course.subtitle}/>

            <div className="container margin-y-lg">
                <h3 className="margin-x-sm margin-bottom-md">Course Overview</h3>
            </div>

            <SidebarLayout sidebar={sidebar}>
                <div className="col justify-center align-center">
                    {course.lessons.map((lesson) => (
                        <LinkCard key={lesson.id} iconClass="icon-ninja" title={lesson.title} description=""/>
                    ))}
                </div>
            </SidebarLayout>
        </div>

    )
}

CourseSummary.propTypes = {

};

export { CourseSummary }