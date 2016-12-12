import React, { Component } from 'react';

import { PageContainer, Quote } from "../../../components";

import { MentorCard } from "./mentor-card";

const Mentors = ({mentors}) => (
    <PageContainer nextPageLabel="Contact" nextPageUrl="contact" center={true}>

        <h3 className="margin-x-sm margin-bottom-md text-xs-center">Meet our mentors...</h3>

        <Quote 
            text="Education is the most powerful weapon which you can use to change the world." 
            author="Nelson Mandela" />

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

