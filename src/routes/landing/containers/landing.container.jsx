import { connect } from "react-redux";

import { Landing } from "../components/landing";

let testimonial = {
    imgClass: "img-testimonial-female1",
    quote: "Learning to code changed my entire career path. I never thought I would be earning the kind of money I am now.",
    author: "Abby, 21, Sussex"
};

let mentoringIcons = [
    {
        id: 1,
        imgClass: "icon-pencil",
        label: "Weekly one-on-one lessons"
    },
    {
        id: 2,
        imgClass: "icon-mentor",
        label: "Personal coding mentor"
    },
    {
        id: 3,
        imgClass: "icon-calendar",
        label: "Learn at your own pace"
    }
];

let quote = {
    text: `Computer Science will change the way we do just about everything`,
    author: "Barack Obama, 2013"
}

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    mentoringIcons: mentoringIcons,
    testimonial: testimonial,
    courses: state.courses.byName,
    quote: quote
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing)
