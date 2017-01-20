import {find} from "lodash";
import {getSummaries} from "../routes/courses/data"; //seed data

const summaries = getSummaries();
console.log(summaries);

import {     
    START_COURSE,
    START_COURSE_LEVEL,
    COURSE_NOT_FOUND, 
    TOGGLE_ENROL_DIALOG  } from "../actions";

let initialState = {
    current: null,
    enrolDialogOpen: false,
    byName: summaries, 
};

export const courses = (state = initialState, action) => {

    switch (action.type) {
    case START_COURSE: 
        let courses = Object.assign({}, state.byName, {[action.courseName]: action.course});
        return Object.assign({}, state, {byName: courses});
    // case "API_GET_COURSE_LEVEL_SUCCESS":
    //     return Object.assign({}, state, {[action.params.course]: {[action.params.level]: action.data}});
    case START_COURSE_LEVEL:
        let newState = Object.assign({}, state);
        // console.log('START_COURSE_LEVEL', action.levelData);
        newState.byName[action.courseName].levels[parseInt(action.levelId) - 1] = action.levelData;
        return newState;
    case TOGGLE_ENROL_DIALOG:
        return Object.assign({}, state, {enrolDialogOpen: !state.enrolDialogOpen});
    default:
        return state;
    }
};
