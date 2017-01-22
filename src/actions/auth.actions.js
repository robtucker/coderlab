import { Router, browserHistory } from 'react-router';
import { AuthApi } from "../api/auth-api";
import { authService } from "../core/auth-service";
import {getAppStore} from "../store";
import {utils} from "../core/utils";

let api = new AuthApi();

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_AUTH_REDIRECT = "SET_AUTH_REDIRECT";

export const setAuthRedirect = (location) => ({location, type: SET_AUTH_REDIRECT});

// sync
export const login = (data) => {
    // login by caching the user data
    authService.login(data);
    // there may be a specific page we need to navigate to
    let store = getAppStore();
    let redirect = store.getState().auth.authRedirect || 'home';
    browserHistory.push(redirect);
    // reset the auth redirect property
    store.dispatch(setAuthRedirect(false))
}

export const logout = () => {
    authService.logout();
    browserHistory.push('/');
}

// async
const postAuth = (authType, data) => { 
    let req = api.post(authType, null, data);
    req.then(user => { 
        //console.log('recieved auth response', user);
        login(user);
    });
};

export const postLogin = data => postAuth('login', data);

export const postRegister = data => postAuth('register', data);

export const postLogout = () => {

    // we don't really care what happens to the post request here
    // as long as we delete the cache then we're all good
    let req = api.post('logout');
    
    return logout();
}

