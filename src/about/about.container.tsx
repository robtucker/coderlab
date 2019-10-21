import { connect } from "react-redux";

import { About } from "./components/about";

const mapDispatchToProps = (dispatch) => ({
    
})

const mapStateToProps = (state) => ({
    mentors: state.mentors,
});

export const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);
