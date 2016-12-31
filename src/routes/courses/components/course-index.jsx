import React, { PropTypes } from 'react';

import { CourseMenu } from "./course-menu";
import { PageContainer } from "../../../components";

const CourseIndex = ({courses, title, subtitle, nextPageUrl, nextPageLabel}) => {

    
    return (
        <PageContainer nextPageUrl={nextPageUrl} nextPageLabel={nextPageLabel}>
            <div className="col align-center margin-x-sm margin-bottom-md">
                <h2 className="margin-bottom-md">{title}</h2>
                <h5 className="margin-bottom-md max-width-600">{subtitle}</h5>
            </div>
            <CourseMenu courses={Object.values(courses)} />
        </PageContainer>
    );
}

CourseIndex.defaultProps = {
    title: "Choose a course...",
    subtitle: `Our courses are a mixture of online and offline learning. 
        You don't need to have a mentor to complete them but we advise that you do.`,
    nextPageUrl: "courses/web",
    nextPageLabel: "Web"
}

export { CourseIndex };
