import React, { PropTypes } from 'react';
import { Link } from "react-router";

import chunk from 'lodash/chunk';

import { LinkCard, NextPage } from "../../../layouts";


const Menu = ({courses}) => {

    // split the list into groups of 2
    let chunks = chunk(courses, 2);

    
    return (
        <div>
            <div className="container margin-y-lg">
                <h4 className="margin-bottom-md margin-x-sm text-xs-center">Choose a course...</h4>

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

            

            </div> 
            <NextPage to="courses/web" label="Web" />
        </div>
    );
}
export { Menu };
