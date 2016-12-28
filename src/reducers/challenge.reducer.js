import { merge, findIndex } from "lodash";
import { 
    START_CHALLENGE, 
    SUBMIT_CHALENGE, 
    SET_VISIBLE_FILE,
    SET_CHALLENGE_DISPLAY, 
    UPDATE_CHALLENGE_FILE, 
    SHOW_TASK_HINT} from "../actions";

let initialState = {
    hint: null,
    display: null,
    showVideo: false,
    currentTask: 0,
    visibleFile: 'index',
    files: {}
};

export const challenge = (state = initialState, action) => {
    switch (action.type) {
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
        let current = Object.assign({}, state.current);
        current.files[action.name].contents = action.contents;
        return Object.assign({}, state, {current});
    case SET_VISIBLE_FILE:
        return Object.assign({}, state, {visibleFile: action.value});
    case SET_CHALLENGE_DISPLAY: 
        return Object.assign({}, state, {display: action.value});
    case SUBMIT_CHALENGE:

    case SHOW_TASK_HINT:
        return Object.assign({}, state, {hint: action.value});
    default: 
        return state;
    }
};
