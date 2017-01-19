import React, { Component } from 'react';

import { PageContainer } from "../../../components/page-container";
//import { Quote } from "../../../components/quote";

import { MentorCard } from "./mentor-card";

const Mentors = ({mentors}) => (
    <PageContainer nextPageLabel="Contact" nextPageUrl="contact" center={true}>

        <h3 className="margin-x-sm margin-bottom-md text-center">Meet our mentors...</h3>

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
    </PageContainer>
)

export { Mentors }

// <Quote 
//     text="Education is the most powerful weapon which you can use to change the world." 
//     author="Nelson Mandela" />