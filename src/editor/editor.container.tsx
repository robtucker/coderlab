import { connect } from "react-redux";
import {find} from "lodash"
import { Editor } from "./editor";
import { Examiner } from "./examiner";
import { breakpoints } from "../styles";
import { 
    updateChallengeFile,
    updateChallengeDisplay, 
    setVisibleFile,
} from "../actions";

// most of the methods used by the EditorContainer 
// are provided as props by the Challenge component
// however there are a few that are unique to the editor 
// and that the Challenge component does not need to know about
const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFile: (id, doc) => {
        dispatch(updateChallengeFile(id, doc));
    },
    setVisibleFile: (value) => {
        dispatch(setVisibleFile(value));
    },
    updateDisplay: (challenge) => {
        
        // find the index
        let html = find(challenge.files, f => f.mode === 'htmlmixed');
        let scripts = find(challenge.files, h => h.mode === 'javascript');
        let styles = find(challenge.files, i => i.mode === 'css');

        //console.log('updateDisplay', challenge, html, scripts, styles)
        let res = html.doc.getValue();

        if(scripts) {
            res = res.replace(/<head>/g, `<head>\n<script>${scripts.contents}</script>\n`);
        }
        if(styles) {
            res = res.replace(/<head>/g, `<head>\n<style>${styles.contents}</style>\n` )
        }
        //console.log('created html display', doc);
        dispatch(updateChallengeDisplay(res));
    }
});

const mapStateToProps = (state, ownProps) => ({

});

export const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);
