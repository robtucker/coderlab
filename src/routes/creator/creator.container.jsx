import { connect } from "react-redux";
import { Creator } from "./components/creator";

const mapStateToProps = (state, ownProps) => ({
    course: state.courses.byName[ownProps.params.courseName]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    doSubmit: (data) => { consoole.log('todo - put course', data)},
})

export const CreatorContainer = connect(mapStateToProps, mapDispatchToProps)(Creator);

