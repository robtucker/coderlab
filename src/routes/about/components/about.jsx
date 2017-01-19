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
                <p>The open-source movement is founded on the belief that everyone can benefit from the open distribution of knowledge,
                    but as individuals we also have a responsibility to give back.</p>
                <p>We are currently seeking like-minded developers to help us create a series of free online courses. 
                If you're interested in contributing then check out the source code <a target="_blank" href="https:github.com/robtucker/coderlab">here</a></p>
            </div>
        </div>

        <div>
            <h3 className="margin-x-sm margin-bottom-md text-center">Meet our mentors...</h3>
            <Mentors mentors={mentors} />
        </div>
        
    </PageContainer>
)

export { About }

