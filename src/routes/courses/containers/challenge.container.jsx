import { connect } from "react-redux";
import { Challenge } from "../components/challenge";
import { breakpoints } from "../../../styles";
import { 
    toggleNavbar, 
    hideNavbar,
    startCourseLevel, 
    courseNotFound,
    toggleVideo, 
    toggleChallengeSidebar,
    startChallenge, 
    showChallengeErrors,
    completeChallenge,
    setCurrentTask,
    closeCompletionModal,
} from "../../../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    startCourseLevel: (courseName, levelId, levelData) => dispatch(startCourseLevel(courseName, levelId, levelData)),
    courseNotFound: () => dispatch(courseNotFound()),
    toggleVideo: () => dispatch(toggleVideo()),
    toggleNavbar: () => dispatch(toggleNavbar()),
    toggleNavigationDrawer: () => dispatch(toggleChallengeSidebar()),
    hideNavbar: () => dispatch(hideNavbar()),
    startChallenge: (challenge) => dispatch(startChallenge(challenge)),
    setCurrentTask: (value) => dispatch(setCurrentTask(value)),
    showErrors: (errors) => dispatch(showChallengeErrors(errors)),
    resetErrors: () => dispatch(showChallengeErrors([])),
    completeChallenge: () => dispatch(completeChallenge()),
    closeCompletionModal: () => dispatch(closeCompletionModal())
})

const mapStateToProps = (state, ownProps) => {
    let props = {
        sidebarVisible: state.challenge.sidebarVisible,
        navbarVisible: state.navbar.navbarVisible,
        editorTheme: state.editor.theme,
        contentWidth: state.app.width,
        contentHeight: state.app.contentHeight,
        isMobile: state.app.width < breakpoints.lg,
        course: state.courses.byName[ownProps.params.courseName],
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

    if(state.courses.byName[ownProps.params.courseName].levels) {
        props.level = find(state.courses.byName[ownProps.params.courseName].levels, l => l.id === ownProps.params.levelId)

    }
    return props;
};

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
