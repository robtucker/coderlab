import {utils} from "../../core/utils";
import {without} from "lodash"
import {SHOW_SNACKBAR, HIDE_SNACKBAR, USER_SETTINGS_UPDATED} from "../actions";


const defaultSnackbar = (message) => ({
    message,
    open: true,
    id: utils.s4(),
    action: 'close',


});

export const snackbars = (state = [], action) => {

    switch (action.type) {
    case SHOW_SNACKBAR:
        return [...state, defaultSnackbar(action.message)];
    case HIDE_SNACKBAR:
        let n = state.filter(s => s.id !== action.id);
        return [...n];
    // case "API_POST_AUTH_REGISTER_ERROR":
    //     return [...state, defaultSnackbar("There was a problem registering your account")];
    case USER_SETTINGS_UPDATED:
        return [...state, defaultSnackbar("Your settings have been updated")]
    case "API_ERROR":
        let s =[...state];
        if(action.body && Array.isArray(action.body.errors)) {
            action.body.errors.forEach(e => {
                if(e.message) s.push(defaultSnackbar(e.message))
            });
        } else if (Array.isArray(action.errors)) {
            action.errors.forEach(e => {
                if(e.message) s.push(defaultSnackbar(e.message))
            });
        }
        return s;
    default: 
        return state;
    }

};