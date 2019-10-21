import { browserHistory } from "react-router";
import { UserApi } from "../api/user-api";
import {authService} from "../../core/auth-service";
import {utils} from "../../core/utils";

let api = new UserApi();

export const USER_SETTINGS_UPDATED = "USER_SETTINGS_UPDATED";

export const getMe = (data) => {
    let req = api.get('me');
}

export const putMe = (data) => {
    let req = api.put('me', null, data);
    req.then(u => authService.updateUser(u));
    return req;
}

export const putUserCourse = (courseData) => {
    // copy the user object over
    let user = Object.assign({}, authService.user())
    // merge the course data and concat timestamp arrays
    user.courses = utils.deepMergeArrayConcat(user.courses, courseData);
    return putMe(user);
}

export const userSettingsUpdated = () => ({type: USER_SETTINGS_UPDATED});
