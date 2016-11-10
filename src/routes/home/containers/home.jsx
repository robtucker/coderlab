import { connect } from "react-redux";

import { Home } from "../components/home";

let testimonial = {
    imgClass: "img-testimonial-female1",
    quote: "Learning to code changed my entire career path. I never thought I would be earning the kind of money I am now.",
    author: "Abby, 21, Sussex"
};

let quote = {
    text: `Computer Science will change the way we do just about everything`,
    author: "Barack Obama, 2013"
}

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    testimonial: testimonial,
    quote: quote
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
