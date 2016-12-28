import { coursesData } from "../routes/courses";
import { TOGGLE_ENROL_DIALOG, TOGGLE_VIDEO } from "../actions";

let initialState = {
    enrolDialogOpen: false,
    index: coursesData,
};

export const courses = (state = initialState, action) => {

    switch (action.type) {

    case "API_GET_COURSE_LEVEL_SUCCESS":
        return Object.assign({}, state, {[action.params.course]: {[action.params.level]: action.data}});
    case TOGGLE_ENROL_DIALOG:
        return Object.assign({}, state, {enrolDialogOpen: !state.enrolDialogOpen});
    case TOGGLE_VIDEO:
        return Object.assign({}, state, {showVideo: !state.showVideo});

    default:
        return state;
    }
    
};
