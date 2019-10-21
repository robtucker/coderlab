import React, { PropTypes, Component } from 'react';
import {browserHistory} from"react-router";
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import { typography } from "../../styles";

import { PageContainer} from "../../../components/page-container";
import { LinkCard } from "../../../components/link-card";
import { SidebarLayout } from "../../../components/sidebar-layout";
import { MenuLink } from "../../../components/menu-link";
import { CourseInstructor } from "./course-instructor";
import { StarRating } from "../../../components/star-rating";
import { CourseBanner } from "./course-banner";
import { EnrolDialog } from "./enrol-dialog";

export class CourseSummary extends Component {

    componentWillMount() {
        // console.log(this.props);
        this.props.setNavbarColor(this.props.course.banner.background);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(this.props);
        if(nextProps.course.banner.background !== this.props.course.banner.background) {
            this.props.setNavbarColor(nextProps.course.banner.background);
        } 
    }

    componentWillUnmount() {
        //console.log(this.props);
        this.props.setNavbarColor(false);
    }

    propTypes: {
        enrolDialogOpen: PropTypes.string.isRequired
    }

    getSidebar () {
        let bold = {fontWeight: 'bold'};
        let dark = {color: typography.textDarkBlack}
        let light = {color: typography.textLightBlack}

        return ( 
            <section>

                <div className="margin-bottom-sm">
                    <CourseInstructor 
                        img={this.props.course.teacher.img} 
                        title={this.props.course.teacher.name} 
                        subtitle={this.props.course.teacher.subtitle} />
                </div>

                <div className="row align-center margin-y-sm">
                    <span style={dark}>Price:&nbsp;</span> 
                    <span style={light}>{this.props.course.price}</span> 
                </div>

                <div className="row align-center margin-y-sm">
                    <span style={dark}>Location:&nbsp;</span>
                    <span style={light}>{this.props.course.location}</span>
                </div>

                <div className="row align-center margin-y-sm">
                    <span style={dark}>Duration:&nbsp;</span>
                    <span style={light}>{this.props.course.duration}</span>
                </div>

                <div className="row align-center margin-y-sm">
                    <span  style={dark}>Difficulty:&nbsp;</span>
                    <StarRating count={this.props.course.difficultyRating} />
                </div>

                <span  style={dark}>Other courses:</span>
                <List>
                    {this.props.relatedCourses.map((c) => (
                        <ListItem key={c.id} primaryText={c.title} 
                            onTouchTap={() => {browserHistory.push(`/courses/${c.slug}`)}} />
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
                    setAuthRedirect={this.props.setAuthRedirect}
                    course={this.props.course} />
            </div>

        );  
        
    }
}
