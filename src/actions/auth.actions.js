import { api } from "../core";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const INVALIDATE_AUTH_USER = "INVALIDATE_AUTH_USER";
export const TOGGLE_AUTH_DIALOG = "TOGGLE_AUTH_DIALOG";
export const SET_AUTH_DIALOG_TYPE = "SET_AUTH_DIALOG_TYPE";

export const toggleAuthDialog = () => ({type: TOGGLE_AUTH_DIALOG});

export const setAuthDialogType = (authType) => ({authType, type: SET_AUTH_DIALOG_TYPE});

export const loginRequest = (email, password) => {
    const user = {email: email, password: password};
    return { user, type: LOGIN_REQUEST };
};

export const loginError = (error) => ({ 
    error, type: LOGIN_ERROR 
});

export const loginSuccess = (json) => ({
    json, type: LOGIN_SUCCESS 
});

export const login = (username, password) => {
    return (dispatch) => {

        dispatch(loginRequest(username, password));

        let req = api.get('login');

        req.then(response => {
            if (response.status >= 200 && response.status < 300) {
                let user = response.json();
                dispatch(loginSuccess(user));
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                dispatch(loginError(error));
                throw error;
            }
        })

        req.catch(error => { console.log('request failed', error); });
    }
};
