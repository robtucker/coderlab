import { Router, browserHistory } from 'react-router';
import { AuthApi } from "../api";
import { authService } from "../core";

let api = new AuthApi();

export const INVALIDATE_AUTH_USER = "INVALIDATE_AUTH_USER";

export const SET_AUTH_USERNAME = "SET_AUTH_USERNAME";
export const SET_AUTH_FIRST_NAME = "SET_AUTH_FIRST_NAME";
export const SET_AUTH_LAST_NAME = "SET_AUTH_LAST_NAME";
export const SET_AUTH_PASSWORD = "SET_AUTH_PASSWORD";
export const SET_AUTH_PASSWORD_CONFIRMATION = "SET_AUTH_PASSWORD_CONFIRMATION";

// AUTH FORMS
export const setAuthUsername = (value) => ({
    value, type: SET_AUTH_USERNAME
});

export const setAuthFirstName = (value) => ({
    value, type: SET_AUTH_FIRST_NAME
});

export const setAuthLastName = (value) => ({
    value, type: SET_AUTH_LAST_NAME
});

export const setAuthPassword = (value) => ({
    value, type: SET_AUTH_PASSWORD
});

export const setAuthPasswordConfirmation = (value) => ({
    value, type: SET_AUTH_PASSWORD_CONFIRMATION
});

// async actions
export const postAuth = (authType, data) => {
    return (dispatch) => {
        let req = api.post(authType, null, data);

        req.then(res => { 
            let data = res.json();
            console.log('setting user in db', data);
            authService.save(data);
            browserHistory.push('/home')
        });
    }
};

export const logout = () => {
    return (dispatch) => {
        let req = api.post('logout');
    }
}