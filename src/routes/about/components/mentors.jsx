import React, { Component } from 'react';
import { MentorCard } from "./mentor-card";

const Mentors = ({mentors}) => (

    <div className="row flex-wrap align-stretch justify-center">
        {
            mentors.map((mentor) => (
                <div key={mentor.id} className="max-width-300 margin-x-sm margin-y-sm flex-1">
                    <MentorCard 
                        name={mentor.name} 
                        subtitle={mentor.subtitle} 
                        img={mentor.img} 
                        description={mentor.description} />
                </div>
            ))
        }
    </div>

)

export { Mentors }
