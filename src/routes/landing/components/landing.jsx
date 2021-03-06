import React,  { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import { Header } from "./header";
import { ArrowBox} from "../../../components/arrow-box";
import { PanelSlider} from "../../../components/panel-slider";
import { Footer } from "../../../components/footer";
//import { NextPage} from "../../../components/next-page";
//import { IconList} from "../../../components/icon-list";

import { CourseIndex } from "../../courses/components/course-index";

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
        url: "courses/unity"
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

const Landing = (props) => {
    return (
        <div>
            <Header appTitle={props.appTitle}/>
            <div><PanelSlider panels={sliderPanels} /></div>
            <CourseIndex courses={props.courses} nextPageUrl={false} nextPageLabel={false}/>
        </div>
    );
}



Landing.propTypes = {
    appTitle: PropTypes.string.isRequired
}

export { Landing }

            
// temporarily removed this
// <IconList list={props.mentoringIcons}
//     title="Find a coding mentor" 
//     subTitle="We have thousands of programmers across the UK who can help you">
//     <ArrowBox color={typography.textDarkBlack} url="mentors" />
// </IconList>
// <NextPage to="mentors" label="Mentors" />