import React, { PropTypes } from 'react';
import { Link } from "react-router";

import chunk from 'lodash/chunk';

import { PageContainer, LinkCard } from "../../../layouts";


const CourseMenu = ({courses}) => {

    // split the list into groups of 2
    let chunks = chunk(courses, 2);

    
    return (
        <PageContainer nextPageUrl="courses/web" nextPageLabel="Web">
            <h3 className="margin-x-sm margin-bottom-md text-xs-left">Choose a course...</h3>

            {chunks.map((chunk)=>{
                
                return (
                    <div className="col-xs row-lg justify-center align-center-xs align-stretch-lg height-100"
                        key={chunk[0].id} >
                        {chunk.map((course) => ( 
                            <LinkCard 
                                key={course.id} 
                                title={course.title} 
                                iconClass={course.iconClass} 
                                description={course.description} 
                                url={`courses/${course.slug}`}/>                
                        ))}
                    </div>
                )
            })}
        </PageContainer>
    );
}
export { CourseMenu };
