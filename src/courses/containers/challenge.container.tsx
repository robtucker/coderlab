import { connect } from "react-redux";
import { Challenge } from "../components/challenge";
import { breakpoints } from "../../styles";
import {utils} from "../../common/core/utils";
import { 
    toggleNavbar, 
    hideNavbar,
    putMe,
    putUserCourse,
    setCourseLevel, 
    courseNotFound,
    toggleVideo, 
    toggleChallengeSidebar,
    startChallenge, 
    showChallengeErrors,
    completeChallenge,
    userCompleteChallenge,
    userCompleteLevel,
    setCurrentTask,
    closeCompletionModal,
} from "../../common/actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    courseNotFound: () => dispatch(courseNotFound()),
    toggleVideo: () => dispatch(toggleVideo()),
    toggleNavbar: () => dispatch(toggleNavbar()),
    toggleNavigationDrawer: () => dispatch(toggleChallengeSidebar()),
    hideNavbar: () => dispatch(hideNavbar()),
    startChallenge: (challenge) => dispatch(startChallenge(challenge)),
    setCurrentTask: (value) => dispatch(setCurrentTask(value)),
    showErrors: (errors) => dispatch(showChallengeErrors(errors)),
    resetErrors: () => dispatch(showChallengeErrors([])),
    // does not update user data - simply updates the state tree
    setCourseLevel: (courseName, course, levelIndex) => dispatch(setCourseLevel(courseName, course, levelIndex)),
    // update user data (dealing with zero indexed level and challenge numbers here)
    startChallenge: (course, levelIndex, challengeIndex) => {
        //console.log('start challenge', course, levelIndex, challengeIndex);
        let level = course.levels[levelIndex];
        let challenge = level.challenges[challengeIndex];
        // The "dateStarted" property is an array of timestamps from earliest to latest
        let data = {[course.id]: {levels: {[level.id]: {challenges: {[challenge.id]: {
            dateStarted: [utils.timestamp()]
        }}}}}};
        let req = putUserCourse(data);
        req.then(u => dispatch(startChallenge(challenge)));
    },
    // just mark challenge as complete
    completeChallenge: (course, levelIndex, challengeIndex) => {
        console.log('complete challenge', course, levelIndex, challengeIndex);
        let level = course.levels[levelIndex];
        let challenge = level.challenges[challengeIndex];
        let data = {[course.id]: {levels: {[level.id]: {challenges: {[challenge.id]: {
            dateCompleted: utils.timestamp()
        }}}}}}
        let req = putUserCourse(data);
        req.then(u => dispatch(completeChallenge(challenge)));
    },
    // mark both level and challenge as complete
    completeLevel: (course, levelIndex, challengeIndex) => {
        let now = utils.timestamp();
        console.log('complete level', course, levelIndex, challengeIndex);
        let level = course.levels[levelIndex];
        let challenge = level.challenges[challengeIndex];
        let data = {[course.id]: {levels: {[level.id]: {
            dateCompleted: now,
            challenges: {
                [challenge.id]: {
                    dateCompleted: now
                }
            }
        }}}};
        let req = putUserCourse(data);
        req.then(u => dispatch(completeChallenge(challenge)));
    },
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
        props.level = find(state.courses.byName[ownProps.params.courseName].levels, l => l.id === ownProps.params.levelIndex)

    }
    return props;
};

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
