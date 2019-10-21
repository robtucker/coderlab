import React, { Component } from 'react';

import { PageContainer } from "../../../components/page-container";
import { Quote } from "../../../components/quote";

import { Mentors } from "./mentors";

const About = ({mentors, email}) => (
    <PageContainer nextPageLabel="Contact" nextPageUrl="contact" center={true}>
        <div className="col align-center justify-center">
            <div style={{maxWidth: '1000px'}}>
                <div className="margin-x-sm" >
                    <h3 className="margin-bottom-md">About CoderLab</h3>



                    <div className="margin-y-lg" >
                        <p>CoderLab is a group of Software Engineers who are passionate about open-source education and life-long learning.</p>
                        <p>We offer one on one training at all levels, helping engineers to develop their potential and hone their craft.</p>
                    </div>

                    <h4 className="margin-bottom-md" >Meet our mentors...</h4>
                </div>
                <Mentors mentors={mentors} />
            </div>
        </div>
                
        

    </PageContainer>
)

export { About }


                    // <Quote 
                    //     text="Education is the most powerful weapon which you can use to change the world." 
                    //     author="Nelson Mandela" />