import { browserHistory } from "react-router";
import { UserApi } from "../api/user-api";
import { utils } from "../core/utils";

let api = new UserApi();

export const USER_START_COURSE = "START_COURSE";

export const getMe = (data) => {

    return (dispatch) => {
        api.get('me');
    }

}

export const putMe = (data) => {

    return (dispatch) => {
        api.put('me', data);
    }

}

export const userStartCourse = (course) => {
    
    let data = {[course.id]: {
        dateStarted: utils.timestamp(),
        challenges: []
    }}

    let req = api.put('me', null, {courses: data});

    return {course, type: USER_START_COURSE}  
};

