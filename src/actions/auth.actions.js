import { Router, browserHistory } from 'react-router';
import { UserApi } from "../api";

let api = new UserApi();

// constants
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const INVALIDATE_AUTH_USER = "INVALIDATE_AUTH_USER";
export const SET_AUTH_USERNAME = "SET_AUTH_USERNAME";
export const SET_AUTH_FIRST_NAME = "SET_AUTH_FIRST_NAME";
export const SET_AUTH_LAST_NAME = "SET_AUTH_LAST_NAME";
export const SET_AUTH_PASSWORD = "SET_AUTH_PASSWORD";
export const SET_AUTH_PASSWORD_CONFIRMATION = "SET_AUTH_PASSWORD_CONFIRMATION";

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

export const loginError = (error) => ({
    error, type: LOGIN_ERROR
});

export const loginSuccess = (user) => ({
    user, type: LOGIN_SUCCESS
});

export const loginRequest = (email, password) => {
    const user = {email: email, password: password};
    return { user, type: LOGIN_REQUEST };
};

// async actions
export const login = () => {

    return (dispatch, getState) => {

        let {username, password} = getState().auth;

        console.log('initiating login', username, password);
        dispatch(loginRequest(username, password));

        let req = api.get('auth/login', username, password);

        req.then(response => {
            console.log('received response');
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                let user = response.json();
                console.log('received user');
                console.log(user);
                dispatch(loginSuccess(user));
                browserHistory.push('/home');
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                console.log('received error');
                console.log(error);
                dispatch(loginError(error));
                throw error;
            }
        })

        req.catch(error => { console.log('request failed', error); });
    }
};
