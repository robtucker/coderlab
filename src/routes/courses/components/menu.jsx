import React, { PropTypes } from 'react';
import { Link } from "react-router";

import chunk from 'lodash/chunk';

import { CourseCard } from "./course-card";


const Menu = ({courses}) => {
    let chunks = chunk(courses, 2);

    
    return (
        <div className="container margin-y-lg">
            <h4 className="margin-bottom-md margin-x-sm">Select a course...</h4>

            {chunks.map((chunk)=>{
                console.log(chunk);
                return (
                    <div key={chunk[0].id} className="col-xs row-lg justify-center align-center-xs align-stretch-lg height-100 margin-y-sm">
                        {chunk.map((course) => ( 
                            <CourseCard 
                                key={course.id} 
                                title={course.title} 
                                iconClass={course.iconClass} 
                                description={course.description} 
                                slug={course.slug}/>                
                        ))}
                    </div>
                )
            })}
        </div>
    );
}
export { Menu };
