import { cache } from "./cache";
import { getAppStore } from "../../store";
import {utils} from "./utils";
import { LOGIN, LOGOUT } from "../actions";
import config from "../../config";
import {merge} from "lodash";

export class AuthService {

    _user;
    _authKey = config.LOCAL_STORAGE_AUTH_KEY;

    check() {
        let user = this._user || this._getUserFromCache()
        //console.log(user);
        if(this._check(user)) {
            //console.log('logged in user detected', this._user);
            return this._user;
        }
        return false;
    }

    user() {
        return this._user;
    }

    login(user) {
        if(this._check(user)) {
            this._set(user)
            this._dispatch({type: LOGIN, user});
            this._user = user;
        } else {
            //todo dispatch login failure
        }
    }

    updateUser(user) {
        let existing = this.check();
        if(existing) this._set(merge(existing, user));
        else this.logout();
    }

    logout() {
        cache.del(this._authKey);
        this._dispatch({type: LOGOUT});
    }

    _getUserFromCache () {
        let data = cache.get(this._authKey);
        return data ? this._user = JSON.parse(utils.base64Decode(data)) : false;
    }

    _check(user) {
        if(!user || !user.token) return false;

        let split = user.token.split('.');

        if(!split.length === 3) return false;

        let payload
        try {
            payload = JSON.parse(utils.base64Decode(split[1]));
        } catch(e) {
            return false;
        }
        return payload.exp && payload.exp > utils.timestamp()

    }

    _set(user) {
        return cache.set(this._authKey, utils.base64Encode(JSON.stringify(user)));
    }

    _dispatch(action) {
        return getAppStore().dispatch(action);
    }   

}

export const authService = new AuthService();