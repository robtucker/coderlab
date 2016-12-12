import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import { PageContainer, LinkCard, SidebarLayout, MenuLink, Avatar, StarRating} from "../../../components";
import { CourseBanner } from "./course-banner";


export class CourseSummary extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.setNavbarColor(this.props.course.banner.background);
    }

    componentWillUnmount() {
        console.log(this.props);
        this.props.setNavbarColor(false);
    }

    getSidebar () {
        return ( 
            <section>
                <h6>Course instructor:</h6>

                <div className="margin-bottom-md margin-x-sm">
                    <Avatar 
                        img={this.props.course.teacher.img} 
                        title={this.props.course.teacher.name} 
                        subtitle={this.props.course.teacher.subtitle} />
                </div>

                <h6>Difficulty:</h6> 
                <div className="margin-x-sm margin-bottom-md">
                    <StarRating count={this.props.course.difficultyRating} />
                </div>

                <h6>Other courses:</h6>
                <List>
                    {this.props.relatedCourses.map((c) => (
                        <ListItem key={c.id} primaryText={c.title} />
                    ))}
                </List>
            </section>
        );
    }

    render() {
            
        return (
            <div>
                <CourseBanner 
                    img={this.props.course.banner.img} 
                    background={this.props.course.banner.background}
                    title={this.props.course.title} 
                    subtitle={this.props.course.subtitle}/>

                <div className="container margin-y-lg">
                    <h3 className="margin-x-sm margin-bottom-md">Course Overview</h3>
                </div>

                <SidebarLayout sidebar={this.getSidebar()}>
                    <div className="col justify-center align-center">
                        {this.props.course.lessons.map((lesson) => (
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
}
