import React,  { PropTypes } from 'react';
import {Link} from "react-router";
import {find} from "lodash";
import { PageContainer } from "../../../components/page-container";
import { CourseIndex } from "../../courses/components/course-index";
//import { CourseMenu } from "../../courses/components/course-menu";

const Home = ({user, courses}) => {
     
    //console.log("Home", user);
    
    if(!user.courses || !Object.keys(user.courses).length) {
        return (
            <CourseIndex 
                courses={courses}
                title="Get started by choosing a course" 
                subtitle={`If you're unsure where to start we recommend learning HTML first.`} />
        );
    }

    // filter the user's active courses
    let active = Object.keys(user.courses).map(k => {
        //console.log('user course', k, courses);
        return find(courses, c => c.id === k);
    });

    //console.log('active courses', active)
    return (

        <CourseIndex 
            courses={active}
            title="Welcome back" 
            subtitle={`Ready to continue coding? Click on a course below to get started!`} />
    );
}



Home.propTypes = {

}

export { Home }

