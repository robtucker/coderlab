import { merge, findIndex } from "lodash";
import { 
    TOGGLE_CHALLENGE_SIDEBAR,
    TOGGLE_VIDEO,
    START_CHALLENGE, 
    SUBMIT_CHALENGE, 
    SET_VISIBLE_FILE,
    UPDATE_CHALLENGE_DISPLAY, 
    UPDATE_CHALLENGE_FILE, 
    SHOW_CHALLENGE_ERRORS} from "../actions";

let initialState = {
    sidebarVisible: false,
    editorTheme: 'dracula',
    hint: null,
    display: null,
    showVideo: true,
    currentTask: 0,
    visibleFile: 'index',
};

export const challenge = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_CHALLENGE_SIDEBAR:
        return Object.assign({}, state, {sidebarVisible: !state.sidebarVisible}); 
    case TOGGLE_VIDEO:
        return Object.assign({}, state, {showVideo: !state.showVideo});
    case START_CHALLENGE:
        return Object.assign({}, state, {
            current: action.challenge,
            hint: null,
            showVideo: true,
            currentTask: 0,
            visibleFile: 'index',
            display: null
        });
    case UPDATE_CHALLENGE_FILE:
        let newState = Object.assign({}, state);
        newState.current.files[action.name].doc = action.doc;
        newState.current.files[action.name].contents = action.doc.getValue();
        return newState;
    case UPDATE_CHALLENGE_DISPLAY: 
        return Object.assign({}, state, {display: action.value});
    case SUBMIT_CHALENGE:
        return Object.assign({}, state, {submissionInProgress: true})
    case SET_VISIBLE_FILE:
        return Object.assign({}, state, {visibleFile: action.value});
    case SHOW_CHALLENGE_ERRORS:
        // just show the first error for now
        return Object.assign({}, state, {hint: action.errors[0].hint});
    default: 
        return state;
    }
};
