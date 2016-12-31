import { cache } from "./cache";
import { getAppStore } from "../store";
import { base64Encode, base64Decode, timestamp } from "./utils";
import { LOGIN, LOGOUT } from "../actions";
import config from "../config";


// USE SYNCHRONOUS LOCAL STORAGE TO GET INITIAL STATE OF AUTH DATA
// this way we can check the auth user and populate the state in a single step

export class AuthService {

    _user;
    _authKey = config.LOCAL_STORAGE_AUTH_KEY;

    check() {
        let user = this._user || this._getUserFromCache()

        if(user && user.token && user.expiry && user.expiry > timestamp()) {
            // console.log('logged in user detected');
            // console.log(this._user);
            return this._user;
        }
        return false;
    }

    user() {
        return this._user;
    }

    login(user) {
        cache.set(this._authKey, base64Encode(JSON.stringify(user)));
        this._dispatch({type: LOGIN, user});
        return this._user = user;
    }

    logout() {
        cache.del(this._authKey);
        this._dispatch({type: LOGOUT});
    }

    _getUserFromCache () {
        let data = cache.get(this._authKey);

        //console.log('retrieved auth user data', JSON.parse(base64Decode(data)));

        return data ? this._user = JSON.parse(base64Decode(data)) : false;
    }

    _dispatch(action) {
        return getAppStore().dispatch(action);
    }   

}

export const authService = new AuthService();