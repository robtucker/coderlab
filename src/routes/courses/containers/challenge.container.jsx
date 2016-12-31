import { connect } from "react-redux";
import { findIndex, find } from "lodash";
import { Challenge } from "../components/challenge";
import { breakpoints } from "../../../styles";
import { 
    toggleVideo, 
    hideFooter,
    showFooter,
    toggleNavbar,
    hideNavbar,
    toggleChallengeSidebar,
    getCourseLevel,
    startChallenge, 
    updateChallengeFile,
    setVisibleFile,
    submitChallenge, 
    setChallengeDisplay, 
    showTaskHint
} from "../../../actions";

const getAst = (doc) => {
    let tokens = [];
    return "foo";
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleVideo: () => {
        dispatch(toggleVideo());
    },
    getCourseLevel,
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    },
    toggleSidebar: () => {
        dispatch(toggleChallengeSidebar());
    },
    hideNavbar: () => {
        dispatch(hideNavbar());
    },
    showFooter: () => {
        dispatch(showFooter());
    },
    hideFooter: () => {
        dispatch(hideFooter());
    },
    startChallenge: (challenge) => {
        dispatch(startChallenge(challenge));
    },
    updateFile: (name, doc) => {
        dispatch(updateChallengeFile(name, doc));
    },
    //todo - run each input through the list of parsers for that file type
    // this way you can see which task has been completed and thus set the currentTask index
    // if the tasks are all complete then fire the action for completing the challenge
    submitChallenge: (challenge) => {

        challenge.tasks.forEach((task) => {
            //console.log('parsing task', task);
            let func = Function('input', task.parser);
            //console.log('created parser', func);
            let res = func(challenge.files);

            if(res.errors.length) {

            }


        })
        //dispatch(submitChallenge(challenge))
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
        sidebarVisible: state.challenge.sidebarVisible,
        navbarVisible: state.navbar.navbarVisible,
        editorTheme: state.challenge.editorTheme,
        appHeight: state.app.height,
        appWidth: state.app.width,
        isMobile: state.app.width < breakpoints.lg,
        course: state.courses[ownProps.params.courseName],
        challenge: state.challenge.current,
        visibleFile: state.challenge.visibleFile,
        hint: state.challenge.hint,
        showVideo: state.challenge.showVideo,
        currentTask: state.challenge.currentTask,
        display: state.challenge.display
    }

    if(state.challenge.current) {
        props.task = state.challenge.current.tasks[state.challenge.currentTask];
    }

    return props;
};

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
