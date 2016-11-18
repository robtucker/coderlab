import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import { PageContainer, LinkCard, SidebarLayout, MenuLink, Avatar, StarRating} from "../../../layouts";
import { CourseBanner } from "./course-banner";


const CourseSummary = ({course, nextCourse, relatedCourses}) => {

    let getSidebar = () => ( 

        <section>
            <h6>Course instructor:</h6>

            <div className="margin-bottom-md margin-x-sm">
                <Avatar 
                    img={course.teacher.img} 
                    title={course.teacher.name} 
                    subtitle={course.teacher.subtitle} />
            </div>

            <h6>Difficulty:</h6> 
            <div className="margin-x-sm margin-bottom-md">
                <StarRating count={course.difficultyRating} />
            </div>

            <h6>Other courses:</h6>
            <List>
                {relatedCourses.map((c) => (
                    <ListItem key={c.id} primaryText={c.title} />
                ))}
            </List>
        </section>

    );
        
    return (
        <div>
            <CourseBanner 
                img={course.banner.img} 
                background={course.banner.background}
                title={course.title} 
                subtitle={course.subtitle}/>

            <div className="container margin-y-lg">
                <h3 className="margin-x-sm margin-bottom-md">Course Overview</h3>
            </div>

            <SidebarLayout sidebar={getSidebar()}>
                <div className="col justify-center align-center">
                    {course.lessons.map((lesson) => (
                        <LinkCard 
                            key={lesson.id} 
                            icon={lesson.icon.img} 
                            iconBackground={lesson.icon.background} 
                            title={lesson.title} 
                            description={lesson.description}/>
                    ))}
                </div>
            </SidebarLayout>
        </div>

    );  
    
}

export { CourseSummary }