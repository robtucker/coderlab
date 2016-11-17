import React, { PropTypes } from 'react';
import { Link } from "react-router";

import chunk from 'lodash/chunk';

import { PageContainer, LinkCard } from "../../../layouts";


const Menu = ({courses}) => {

    // split the list into groups of 2
    let chunks = chunk(courses, 2);

    
    return (
        <PageContainer title="Choose a course" nextPageUrl="courses/web" nextPageLabel="Web">

                {chunks.map((chunk)=>{
                    
                    return (
                        <div className="col-xs row-lg justify-center align-center-xs align-stretch-lg height-100 margin-y-sm"
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
export { Menu };
