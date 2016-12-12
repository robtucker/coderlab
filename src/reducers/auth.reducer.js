import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    INVALIDATE_AUTH_USER,
    SET_AUTH_USERNAME, 
    SET_AUTH_FIRST_NAME, 
    SET_AUTH_LAST_NAME,
    SET_AUTH_PASSWORD,
    SET_AUTH_PASSWORD_CONFIRMATION 
} from "../actions";

let initialState = {
    authDialogOpen: false,
    authDialogType: 'login',
    isLoggedIn: false,
    requestInProgress: false,
    user: null,
    username: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: ''
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return Object.assign({}, state, {requestInProgress: true});
    case LOGIN_SUCCESS:
        return Object.assign({}, state, {
            user: action.user, 
            token: action.user.token,
            isLoggedIn: true,
            requestInProgress: false
        });
    case LOGIN_ERROR:
        return Object.assign({}, state, {requestInProgress: false});
    case SET_AUTH_USERNAME:
        console.log(action);
        return Object.assign({}, state, {username: action.value});
    case SET_AUTH_FIRST_NAME:
        return Object.assign({}, state, {firstName: action.value});
    case SET_AUTH_LAST_NAME:
        return Object.assign({}, state, {lastName: action.value});
    case SET_AUTH_PASSWORD:
        return Object.assign({}, state, {password: action.value});
    case SET_AUTH_PASSWORD_CONFIRMATION:
        return Object.assign({}, state, {passwordConfirmation: action.value});
    default:
        return state;
    }
    
}