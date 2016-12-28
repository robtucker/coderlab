import { browserHistory } from "react-router";
import { UserApi } from "../api";
import { utils } from "../core";

let api = new UserApi();

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

// async actions
export const startCourse = (course) => {
    
    let data = {[course.id]: {
        dateStarted: utils.timestamp(),
        challenges: []
    }}

    let req = api.put('me', null, {courses: data});

    req.then((res => { 
        browserHistory.push(`courses/${course.slug}/level/1/1`);
    }));
    
};
