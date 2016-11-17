import { connect } from "react-redux";

import { Mentors } from "./components/mentors";

const mapDispatchToProps = (dispatch) => ({
    
})

const mapStateToProps = (state) => ({
    mentors: state.mentors,
});

export const MentorsContainer = connect(mapStateToProps, mapDispatchToProps)(Mentors);
