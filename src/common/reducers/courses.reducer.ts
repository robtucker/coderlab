import {find} from "lodash";
import {getSummaries} from "../../courses/data"; //seed data

const summaries = getSummaries();
//console.log(summaries);

import {     
    SET_COURSE_LEVEL,
    COURSE_NOT_FOUND, 
    TOGGLE_ENROL_DIALOG  } from "../actions";

let initialState = {
    current: null,
    enrolDialogOpen: false,
    byName: summaries, 
};

export const courses = (state = initialState, action) => {

    switch (action.type) {
    // case "API_GET_COURSE_LEVEL_SUCCESS":
    //     return Object.assign({}, state, {[action.params.course]: {[action.params.level]: action.data}});
    case SET_COURSE_LEVEL:
        let newState = Object.assign({}, state);
        newState.byName[action.courseName].levels[action.levelIndex] = action.course.levels[action.levelIndex];
        return newState;
    case TOGGLE_ENROL_DIALOG:
        return Object.assign({}, state, {enrolDialogOpen: !state.enrolDialogOpen});
    default:
        return state;
    }
};
