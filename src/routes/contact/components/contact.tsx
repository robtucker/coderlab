import React, { Component } from 'react';

import { PageContainer } from "../../../components/page-container";

const Contact = ({contactEmail}) => (
    <PageContainer>
        <h3 className="margin-bottom-md text-left">Get in touch</h3>

        <p>We're always open to being contacted about new ventures and business plans. 
            Don't hesitate to drop us a message if you're interested in what we do.</p>
        <p>E: <a href="mailto:{{ contactEmail }}" target="_top" className="primary">{contactEmail}</a></p>

        <p>We're based in London. Come and say hi!</p>

        <section className="width-100 height-100" style={{height: "500px"}}>
            <iframe className="height-100 width-100" 
                frameBorder="0" 
                src="https://www.google.com/maps/embed/v1/place?q=London+N1+2QZ,+United+Kingdom&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU">
            </iframe>
        </section>
    </PageContainer>
)

export { Contact }


