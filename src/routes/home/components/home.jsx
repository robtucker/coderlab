import React,  { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Header } from "./header";
import { Testimonial } from "./testimonial";
import { JobListContainer } from "../containers/job-list";
import { ImagePanel, SplitPanel, IconList, Quote, ArrowBox, NextPage } from "../../../layouts";
import { textColors } from "../../../styles";

const Home = (props) => {
     
    return (
        <div>
            <Header appTitle={props.appTitle}/>

            <Testimonial data={props.testimonial}/>

            <ImagePanel imgClass="img-bubbles" className="white overlay-50">
                <h1 className="margin-bottom-sm">Anyone can learn to code</h1>
                <h3 className="margin-bottom-lg">Write your first line of code right now!</h3>
                <ArrowBox />
            </ImagePanel>

            <IconList list={props.mentoringIcons}
                title="Meet your new personal trainer" 
                subTitle="One on one training that will push you to your limit">
                <ArrowBox color={textColors.darkBlack} text="Find out more" />
            </IconList>

            <ImagePanel  imgClass="img-html" bgColor="#051934" reverse={true} className="overlay-50 white">
                <h1 className="margin-bottom-md">Become a web developer in 12 weeks</h1>
                <h4 className="margin-bottom-md">This intensive course is designed to prepare you for 
                    your first programming job.</h4>
                <ArrowBox />
            </ImagePanel>

            <SplitPanel  imgClass="img-testimonial-female2" reverse={true}>
                <div className="col justify-center align-center-xs align-start-md margin-y-md">
                    <blockquote className="blockquote max-width-400 margin-x-md text-xs-center text-md-left">
                        <h5 className="margin-bottom-md">Having constant access to my own personal mentor 
                            made all the difference for me. If I can do it in my 40s then anyone can.</h5>
                        <footer className="blockquote-footer font-size-lg">Elaine, 42, London</footer>
                    </blockquote>
                </div>
            </SplitPanel>

            <ImagePanel  imgClass="img-gaming" className="overlay-50 white">
                <h1 className="margin-bottom-md">Make video games in Unity</h1>
                <div className="img-unity-logo margin-bottom-lg"></div>
                <ArrowBox />
            </ImagePanel>

            <section className="text-xs-center margin-y-xl">
                <div className="padding-x-md">
                    <h2 className="margin-bottom-lg">Everyone needs coding skills...</h2>
                    <JobListContainer />
                </div>

                <Quote text={props.quote.text} author={props.quote.author} />
            </section>

            <ImagePanel  imgClass="img-teacher-training" className="overlay-50 white">
                <h1 className="margin-bottom-sm">Teacher Training</h1>
                <h4 className="margin-bottom-lg">Give your students the skills they need for the modern world.</h4>
                <ArrowBox />
            </ImagePanel>


            <NextPage to="courses" label="Courses" />
        </div>
    );
}

Home.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Home }