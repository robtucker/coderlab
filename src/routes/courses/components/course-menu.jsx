import React, { PropTypes } from 'react';
import { Link } from "react-router";

import chunk from 'lodash/chunk';

import { LinkCard } from "../../../components/link-card";


const CourseMenu = ({courses}) => {

    // split the list into groups of 2
    let chunks = chunk(courses, 2);

    return (
        <section>
            {chunks.map((chunk) => {
                return (
                    <div className="col-xs row-lg justify-center align-center-xs align-stretch-lg height-100"
                        key={chunk[0].id} >
                        {chunk.map((course) => ( 
                            <LinkCard 
                                key={course.id} 
                                title={course.title} 
                                icon={course.icon.img}
                                iconBackground={course.icon.background}
                                description={course.description} 
                                url={`courses/${course.slug}`}/>                
                        ))}
                    </div>
                )
            })}
        </section>
    )
}
export { CourseMenu };

