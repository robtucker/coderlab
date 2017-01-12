import { merge, find, findIndex } from "lodash";
import { 
    TOGGLE_CHALLENGE_SIDEBAR,
    TOGGLE_VIDEO,
    START_CHALLENGE, 
    SUBMIT_CHALENGE, 
    SET_VISIBLE_FILE,
    UPDATE_CHALLENGE_DISPLAY, 
    UPDATE_CHALLENGE_FILE, 
    SET_CURRENT_TASK,
    SHOW_CHALLENGE_ERRORS,
    COMPLETE_CHALLENGE,
    CLOSE_COMPLETION_MODAL} from "../actions";

let initialState = {
    sidebarVisible: false,
    editorTheme: 'dracula',
    errors: [],
    display: null,
    showVideo: true,
    currentTask: 0,
    isComplete: false,
    showCompletionModal: false,
    visibleFile: '',
};


const normalizeLineEndings = (str) => {
    if (!str) return str;
    return str.replace(/\r\n|\r/g, '\n');
}

export const challenge = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_CHALLENGE_SIDEBAR:
        return Object.assign({}, state, {sidebarVisible: !state.sidebarVisible}); 
    case TOGGLE_VIDEO:
        return Object.assign({}, state, {showVideo: !state.showVideo});
    case START_CHALLENGE:
        let visibleFile = find(action.challenge.files, f => f.mode === "htmlmixed");
        return Object.assign({}, state, {
            current: action.challenge,
            errors: [],
            showVideo: false,
            currentTask: 0,
            isComplete: false,
            showCompletionModal: false,
            visibleFile: visibleFile.id,
            display: null
        });
    case UPDATE_CHALLENGE_FILE:

        let fileIndex = findIndex(state.current.files, f => f.id === action.id);
        //console.log('fileIndex', action, state.current, fileIndex);
        let newState = Object.assign({}, state);
        newState.current.files[fileIndex].doc = action.doc;
        newState.current.files[fileIndex].contents = normalizeLineEndings(action.doc.getValue());
        return newState;
    case UPDATE_CHALLENGE_DISPLAY: 
        return Object.assign({}, state, {display: action.value});
    case SET_CURRENT_TASK:
        return Object.assign({}, state, {currentTask: action.value});
    case SUBMIT_CHALENGE:
        return Object.assign({}, state, {submissionInProgress: true})
    case SET_VISIBLE_FILE:
        return Object.assign({}, state, {visibleFile: action.value});
    case SHOW_CHALLENGE_ERRORS:
        // just show the first error for now
        return Object.assign({}, state, {errors: action.errors});
    case COMPLETE_CHALLENGE:
        return Object.assign({}, state, {isComplete: true, showCompletionModal: true});
    case CLOSE_COMPLETION_MODAL:
        return Object.assign({}, state, {showCompletionModal: false});
    default: 
        return state;
    }
};
