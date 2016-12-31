import { merge, findIndex } from "lodash";
import { 
    TOGGLE_CHALLENGE_SIDEBAR,
    START_CHALLENGE, 
    SUBMIT_CHALENGE, 
    SET_VISIBLE_FILE,
    SET_CHALLENGE_DISPLAY, 
    UPDATE_CHALLENGE_FILE, 
    SHOW_TASK_HINT} from "../actions";

let initialState = {
    sidebarVisible: false,
    editorTheme: 'dracula',
    hint: null,
    display: null,
    showVideo: false,
    currentTask: 0,
    visibleFile: 'index',
};

const getDisplay = (challenge) => {
    let doc = challenge.files.index.doc.getValue();

    if(challenge.files.scripts) {
        doc = doc.replace(/<head>/g, `<head>\n<script>${challenge.files.scripts.contents}</script>\n`);
    }
    if(challenge.files.styles) {
        doc = doc.replace(/<head>/g, `<head>\n<style>${challenge.files.styles.contents}</style>\n` )
    }
    //console.log('created html display', doc);
    return doc;
}

export const challenge = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_CHALLENGE_SIDEBAR:
        return Object.assign({}, state, {sidebarVisible: !state.sidebarVisible}); 
    case START_CHALLENGE:
        return Object.assign({}, state, {
            current: action.challenge,
            hint: null,
            showVideo: false,
            currentTask: 0,
            visibleFile: 'index',
            display: null
        });
    case UPDATE_CHALLENGE_FILE:
        let newState = Object.assign({}, state);
        newState.current.files[action.name].doc = action.doc;
        newState.current.files[action.name].contents = action.doc.getValue();
        newState.display = getDisplay(newState.current);
        return newState;
    case SET_VISIBLE_FILE:
        return Object.assign({}, state, {visibleFile: action.value});
    case SET_CHALLENGE_DISPLAY: 
        return Object.assign({}, state, {display: action.value});
    case SUBMIT_CHALENGE:
        return Object.assign({}, state, {submissionInProgress: true})
    case SHOW_TASK_HINT:
        return Object.assign({}, state, {hint: action.value});
    default: 
        return state;
    }
};
