import { connect } from "react-redux";
import { findIndex, find } from "lodash";
import { Challenge } from "../components/challenge";
import { CodeParser } from "../../../core";
import { breakpoints } from "../../../styles";
import { 
    toggleVideo, 
    toggleNavbar,
    hideNavbar,
    toggleChallengeSidebar,
    getCourseLevel,
    startChallenge, 
    showChallengeErrors,
    completeChallenge,
    setCurrentTask,
    closeCompletionModal,
} from "../../../actions";

let parser;
let fileToParse;

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleVideo: () => {
        dispatch(toggleVideo());
    },
    getCourseLevel,
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    },
    toggleNavigationDrawer: () => {
        dispatch(toggleChallengeSidebar());
    },
    hideNavbar: () => {
        dispatch(hideNavbar());
    },
    startChallenge: (challenge) => {
        dispatch(startChallenge(challenge));
    },
    setCurrentTask: (value) => {
        dispatch(setCurrentTask(value));
    },
    showErrors: (errors) => {
        dispatch(showChallengeErrors(errors));
    },
    resetErrors: () => {
        dispatch(showChallengeErrors([]));
    },
    completeChallenge: () => {
        dispatch(completeChallenge());
    },
    closeCompletionModal: () => {
        dispatch(closeCompletionModal());
    }
})

const mapStateToProps = (state, ownProps) => {
    let props = {
        sidebarVisible: state.challenge.sidebarVisible,
        navbarVisible: state.navbar.navbarVisible,
        editorTheme: state.editor.theme,
        contentWidth: state.app.width,
        contentHeight: state.app.contentHeight,
        isMobile: state.app.width < breakpoints.lg,
        course: state.courses[ownProps.params.courseName],
        challenge: state.challenge.current,
        errors: state.challenge.errors,
        showVideo: state.challenge.showVideo,
        currentTask: state.challenge.currentTask,
        display: state.challenge.display,
        challengeCompleted: state.challenge.isComplete,
        showCompletionModal: state.challenge.showCompletionModal,
    }

    if(state.challenge.current) {
        props.task = state.challenge.current.tasks[state.challenge.currentTask];
    }

    return props;
};

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
