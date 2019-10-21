import { authService } from "../core/auth-service";
import config from "../../config";

import { 
    LOGIN,
    LOGOUT,
    SET_AUTH_REDIRECT
} from "../actions";

let initialState = {
    authDialogOpen: false,
    authDialogType: 'login',
    isLoggedIn: false,
    requestInProgress: false,
    user: null,
};

if(authService.check()) {
    initialState.isLoggedIn = true;
    initialState.user = authService.user();
}

export const auth = (state = initialState, action) => {
    switch (action.type) {

    case LOGIN:
        return Object.assign({}, state, {
            user: action.user, 
            isLoggedIn: true,
            requestInProgress: false
        });

    case LOGOUT:
        return Object.assign({}, state, {
            user: null, 
            isLoggedIn: false,
        });

    case SET_AUTH_REDIRECT:
        return Object.assign({}, state, {authRedirect: action.location});


    case "API_POST_AUTH_LOGIN_REQUEST":
    case "API_POST_AUTH_REGISTER_REQUEST":
        return Object.assign({}, state, {requestInProgress: true});

    case "API_POST_AUTH_LOGIN_ERROR":
    case "API_POST_AUTH_REGISTER_ERROR":
        return Object.assign({}, state, {requestInProgress: false});  

    default:
        return state;
    }
    
}