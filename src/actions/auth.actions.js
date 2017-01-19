import { Router, browserHistory } from 'react-router';
import { AuthApi } from "../api/auth-api";
import { authService } from "../core/auth-service";

let api = new AuthApi();

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_AUTH_REDIRECT = "SET_AUTH_REDIRECT";

// sync
export const login = (data, redirect = false) => {
    let location = redirect || '/home';
    authService.login(data);
    browserHistory.push(location);
}

export const logout = () => {
    authService.logout();
    browserHistory.push('/');
}

export const setAuthRedirect = (location) => ({location, type: SET_AUTH_REDIRECT});

// async
const postAuth = (authType, data, redirect = false) => { 
    let req = api.post(authType, null, data);

    req.then(res => { 
        console.log('recieved api response');
        if(api.isSuccess(res)) {
            console.log('recieved successful api response');
            let data = res.json();
            return login(data);
        } else {
            console.log('api response not successful');
        }
    });

    req.catch((res) => {
        console.log('caught failed api response', res);
        
    })
};

export const postLogin = data => postAuth('login', data);

export const postRegister = data => postAuth('register', data);

export const postLogout = () => {

    // we don't really care what happens to the post request here
    // as long as we delete the cache then we're all good
    let req = api.post('logout');
    
    return logout();
}

