import { connect } from "react-redux";
import { Editor } from "./editor";
import { Examiner } from "./examiner";
import { breakpoints } from "../styles";
import { 
    updateChallengeFile,
    updateChallengeDisplay, 
    setVisibleFile,
    submitChallenge, 
    nextChallenge,
    showChallengeErrors
} from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFile: (name, doc) => {
        dispatch(updateChallengeFile(name, doc));
    },
    setVisibleFile: (value) => {
        dispatch(setVisibleFile(value));
    },
    updateDisplay: (challenge) => {
        let res = challenge.files.index.doc.getValue();

        if(challenge.files.scripts) {
            res = res.replace(/<head>/g, `<head>\n<script>${challenge.files.scripts.contents}</script>\n`);
        }
        if(challenge.files.styles) {
            res = res.replace(/<head>/g, `<head>\n<style>${challenge.files.styles.contents}</style>\n` )
        }
        //console.log('created html display', doc);
        dispatch(updateChallengeDisplay(res));
    },
    handleSubmit: (challenge) => {
        //console.log('submit challenge', challenge);
        let examiner = new Examiner();
        examiner.examineAllTasks(challenge);
        //console.log('examiner', examiner);

        // if there are errors show them to the user
        if(examiner.errors && examiner.errors.length) {
            dispatch(showChallengeErrors(examiner.errors));
        } else {
            //otherwise the challenge is complete
            //dispatch(nextChallenge(challenge))
        }
    }
});

const mapStateToProps = (state, ownProps) => ({
    contentHeight: state.app.contentHeight,
    isMobile: state.app.width < breakpoints.lg,
    challenge: state.challenge.current,
    visibleFile: state.challenge.visibleFile,
    editorTheme: state.editor.theme,
    display: state.challenge.display
});

export const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);
