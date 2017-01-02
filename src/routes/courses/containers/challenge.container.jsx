import { connect } from "react-redux";
import { findIndex, find } from "lodash";
import { Challenge } from "../components/challenge";
import { CodeParser } from "../../../core";
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
    showChallengeErrors
} from "../../../actions";

const getAst = (doc) => {
    let tokens = [];
    return "foo";
}

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
        let errors = [];
        console.log('submit challenge', challenge);
        // each challenge has multiple tasks
        challenge.tasks.forEach((task) => {
            // each task has multiple parsers
            task.parsers.forEach((parser) => {
                // each parser function operates on a specific file
                fileToParse = challenge.files[parser.file];
                console.log('parsing file', fileToParse);
                parser = new CodeParser(fileToParse, parser);
                console.log('parser', parser);


                if(parser.errors.length) {
                    console.log('found parser errors', parser.errors);
                    errors.push(parser.errors);
                }
            });
        });

        if(errors.length) {
            dispatch(showChallengeErrors(parser.errors));
        }
        
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
