import { browserHistory } from "react-router";
import { UserApi } from "../api/user-api";
import { utils } from "../core/utils";
import {authService} from "../core/auth-service";
import {merge} from "lodash";

let api = new UserApi();

export const USER_START_COURSE = "START_COURSE";
export const USER_SETTINGS_UPDATED = "USER_SETTINGS_UPDATED";

export const getMe = (data) => {
    let req = api.get('me');
}

export const putMe = (data) => {
    let req = api.put('me', null, data);
    req.then(u => authService.updateUser(u));
    return req;
}

export const userStartCourse = (course) => {
    let data = {[course.id]: {
        dateStarted: utils.timestamp(),
        levels: {

        }
    }}

    let req = api.put('me', null, merge(authService.user(), {courses: data}));
    req.then(u => authService.updateUser(u));

    return {course, type: USER_START_COURSE}  
};


export const userSettingsUpdated = () => ({type: USER_SETTINGS_UPDATED});
