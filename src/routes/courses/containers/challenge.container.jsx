import { connect } from "react-redux";
import { findIndex, find } from "lodash";
import { Challenge } from "../components/challenge";
import { 
    toggleVideo, 
    getCourseLevel,
    startChallenge, 
    updateChallengeFile,
    setVisibleFile,
    submitChallenge, 
    setChallengeDisplay, 
    showTaskHint
} from "../../../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleVideo: () => {
        dispatch(toggleVideo());
    },
    getCourseLevel,

    startChallenge: (challenge) => {
        dispatch(startChallenge(challenge));
    },
    updateFile: (name, contents) => {
        dispatch(updateChallengeFile(name, contents));
    },
    //todo - run each input through the list of parsers for that file type
    // this way you can see which task has been completed and thus set the currentTask index
    // if the tasks are all complete then fire the action for completing the challenge
    submitChallenge: (challenge, files) => {
        dispatch(submitChallenge(challenge, input))
    },
    setVisibleFile: (value) => {
        dispatch(setVisibleFile(value));
    },
    showTaskHint: (hint) => {
        dispath(showTaskHint(hint))
    },

})

const mapStateToProps = (state, ownProps) => {

    let props = {
        course: state.courses[ownProps.params.courseName],
        challenge: state.challenge.current,
        visibleFile: state.challenge.visibleFile,
        hint: state.challenge.hint,
        showVideo: state.challenge.showVideo,
        currentTask: state.challenge.currentTask,
    }

    if(state.challenge.current) {
        props.task = state.challenge.current.tasks[state.challenge.currentTask];
    }

    return props;
};

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
