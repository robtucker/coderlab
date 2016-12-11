import React,  { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Header } from "./header";
import { ArrowBox, PanelSlider, NextPage, IconList} from "../../../layouts";
import { CourseIndex } from "../../courses";

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

            <CourseIndex courses={props.courses} nextPageUrl={false} nextPageLabel={false}/>

            <IconList list={props.mentoringIcons}
                title="Find a coding mentor" 
                subTitle="We have thousands of programmers across the UK who can help you">
                <ArrowBox color={typography.textDarkBlack} url="mentors" />
            </IconList>

            <NextPage to="mentors" label="Mentors" />
        </div>
    );
}



Home.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Home }