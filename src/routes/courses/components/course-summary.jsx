import React, { PropTypes, Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

import { PageContainer, LinkCard, SidebarLayout, MenuLink, Avatar, StarRating } from "../../../components";
import { CourseBanner } from "./course-banner";
import { EnrolDialog } from "../components/enrol-dialog";

export class CourseSummary extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.setNavbarColor(this.props.course.banner.background);
    }

    componentWillUnmount() {
        //console.log(this.props);
        this.props.setNavbarColor(false);
    }

    propTypes: {
        enrolDialogOpen: PropTypes.string.isRequired
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
                    isMobile={this.props.isMobile}
                    img={this.props.course.banner.img} 
                    background={this.props.course.banner.background}
                    title={this.props.course.title} 
                    subtitle={this.props.course.subtitle}
                    toggleDialog={this.props.toggleEnrolDialog}/>

                <div className="container margin-y-lg">
                    <h3 className="margin-x-sm margin-bottom-md">Course Overview</h3>
                </div>

                <SidebarLayout sidebar={this.getSidebar()}>
                    <div className="col justify-center align-center">
                        {this.props.course.levels.map((level) => (
                            <LinkCard 
                                key={level.id} 
                                icon={level.icon.img} 
                                iconBackground={level.icon.background} 
                                title={level.title} 
                                description={level.description}
                                disabled={true}/>
                        ))}
                    </div>
                </SidebarLayout>

                <EnrolDialog 
                    open={this.props.enrolDialogOpen} 
                    toggle={this.props.toggleEnrolDialog} 
                    isLoggedIn={this.props.isLoggedIn}
                    startCourse={this.props.startCourse}
                    course={this.props.course} />
            </div>

        );  
        
    }
}
