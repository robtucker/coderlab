import { 
    TOGGLE_AUTH_DIALOG, 
    SET_AUTH_DIALOG_TYPE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR 
} from "../actions";

let initialState = {
    authDialogOpen: false,
    authDialogType: 'login',
    isLoggedIn: false,
    requestInProgress: false,
    user: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_AUTH_DIALOG:
        return Object.assign({}, state, {authDialogOpen: !state.authDialogOpen});
    case SET_AUTH_DIALOG_TYPE:
        return Object.assign({}, state, {authDialogType: action.authType});
    case LOGIN_REQUEST:
        return Object.assign({}, state, {requestInProgress: true});
    case LOGIN_SUCCESS:
        return Object.assign({}, state, {user: action.response, requestInProgress: true});
    case LOGIN_ERROR:
        return Object.assign({}, state, {requestInProgress: false});
    default:
        return state;
    }
    
}