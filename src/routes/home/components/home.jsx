import React,  { PropTypes } from 'react';
import {Link} from "react-router";

import { PageContainer } from "../../../components";
import { CourseMenu } from "../../courses/components/course-menu";

const Home = ({user}) => {
     
    var inProgress;

    if(!user.courses) {
        inProgress = (
            <div>You do not currently have any courses. Start one of our courses 
                <Link to="courses" className="primary1 cursor-pointer"> here</Link>
            </div>
        );
    } else {
        inProgress = (<CourseMenu courses={user.courses} />);
    }

    return (
        <PageContainer>
            <h3>Home</h3>
            {inProgress}
        </PageContainer>
    );
}



Home.propTypes = {

}

export { Home }

