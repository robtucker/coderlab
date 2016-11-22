import React,  { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Header } from "./header";
import { JobListContainer } from "../containers/job-list";
import { ArrowBox, PanelSlider, SplitPanel, IconList, Quote, NextPage, Testimonial } from "../../../layouts";
import { typography } from "../../../styles";

let unityLogo = <div className="img-unity-logo margin-bottom-lg"></div>;

let sliderPanels = [

    {
        id: 1,
        title: "Become a web developer in 12 weeks",
        subtitle: "This intensive course is designed to prepare you for your first programming job",
        img: require("../../../assets/img/backgrounds/html-fade.png"),
        url: "courses/web",
        bgColor: "#051934" 
    },
    {
        id: 2,
        title: "Make video games in Unity",
        subtitle: unityLogo,
        img: require("../../../assets/img/backgrounds/fantasy.jpg"),
        url: "courses/game"
    },
    {
        id: 3,
        title: "Teacher Training",
        subtitle: "Give your students the skills they need for the modern world",
        img: require("../../../assets/img/backgrounds/primary-school-computing.jpg"),
        url: "courses/teacher"
    },
    {
        id: 4,
        title: "Anyone can learn to code",
        subtitle: "Write your first line of code right now!",
        img: require("../../../assets/img/backgrounds/bubbles.png"),
        url: "courses/web"
    },

]

const Home = (props) => {
     
    return (
        <div>
            <Header appTitle={props.appTitle}/>

            <div><PanelSlider panels={sliderPanels} /></div>


            <IconList list={props.mentoringIcons}
                title="Meet your new personal trainer" 
                subTitle="One on one training that will push you to your limit">
                <ArrowBox color={typography.textDarkBlack} url="mentors" />
            </IconList>


            <Testimonial 
                quote={props.testimonial.quote} 
                author={props.testimonial.author} 
                imgClass={props.testimonial.imgClass}/>

            <SplitPanel  imgClass="img-testimonial-female2" reverse={true}>
                <div className="col justify-center align-center-xs align-start-md margin-y-md">
                    <blockquote className="blockquote max-width-400 margin-x-md text-xs-center text-md-left">
                        <h5 className="margin-bottom-md">Having constant access to my own personal mentor 
                            made all the difference for me. If I can do it in my 40s then anyone can.</h5>
                        <footer className="blockquote-footer font-size-lg">Elaine, 42, London</footer>
                    </blockquote>
                </div>
            </SplitPanel>



            <section className="text-xs-center margin-y-xl">
                <div className="padding-x-md">
                    <h2 className="margin-bottom-lg">Everyone needs coding skills...</h2>
                    <JobListContainer />
                </div>

                <Quote text={props.quote.text} author={props.quote.author} />
            </section>

            <NextPage to="courses" label="Courses" />
        </div>
    );
}

Home.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Home }