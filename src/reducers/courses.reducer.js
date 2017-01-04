import {find} from "lodash";
import * as courseData from "../routes/courses/data"; //seed data
import { SET_CURRENT_COURSE, TOGGLE_ENROL_DIALOG,  } from "../actions";

let initialState = {
    current: null,
    enrolDialogOpen: false,
    byName: courseData, 
};

export const courses = (state = initialState, action) => {

    switch (action.type) {
    case SET_CURRENT_COURSE:
        return Object.assign({}, state, {current: action.course})
    case "API_GET_COURSE_LEVEL_SUCCESS":
        return Object.assign({}, state, {[action.params.course]: {[action.params.level]: action.data}});
    case TOGGLE_ENROL_DIALOG:
        return Object.assign({}, state, {enrolDialogOpen: !state.enrolDialogOpen});
    default:
        return state;
    }
    
};
