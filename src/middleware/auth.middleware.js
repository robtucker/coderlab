//import { setAuthRedirect } from "../actions";

export const authMiddleware = (store, to = "login") => {

    return (nextState, replace, next) => {

        if(!store.getState().auth.isLoggedIn) {
            replace(to);
        }
        next();
    }
}