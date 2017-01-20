import React, { Component } from 'react';

import { PageContainer } from "../../../components/page-container";
import { Quote } from "../../../components/quote";

import { Mentors } from "./mentors";

const About = ({mentors, email}) => (
    <PageContainer nextPageLabel="Contact" nextPageUrl="contact" center={true}>
        <h3 className="margin-x-sm margin-bottom-md text-center">About CoderLab</h3>
        <Quote 
            text="Education is the most powerful weapon which you can use to change the world." 
            author="Nelson Mandela" />

        <div className="col justify-center align-center margin-y-lg" >
            <div style={{maxWidth: '800px'}}>
                <p>CoderLab is a group of Software Engineers who are passionate about open-source education and life-long learning.</p>
                <p>We offer one on one training at all levels, helping engineers to develop their potential and hone their craft.</p>
            </div>
        </div>

        <div>
            <h3 className="margin-x-sm margin-bottom-md text-center">Meet our mentors...</h3>
            <Mentors mentors={mentors} />
        </div>
        
    </PageContainer>
)

export { About }

