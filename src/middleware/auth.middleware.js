//import { setAuthRedirect } from "../actions";
import { getAppStore } from "../store";

export const authMiddleware = (store, to = "login") => {

    return (nextState, replace, next) => {

        if(!store.getState().auth.isLoggedIn) {
            replace(to);
        }
        next();
    }
}

export const guestMiddleware = (to = "home") => {
    return (nextState, replace, next) => {
        let state = getAppStore().getState();
        //console.log('checking guest middleware',state );
        if(state.auth.isLoggedIn) {
            replace(to);
        }
        next();
    } 
}