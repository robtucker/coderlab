import { cache } from "./cache";
import { base64Encode, base64Decode, timestamp } from "./utils";
import config from "../config";


// USE SYNCHRONOUS LOCAL STORAGE TO GET INITIAL STATE OF AUTH DATA
// this way we can check the auth user and populate the state in a single step

export class AuthService {

    _user;

    check() {
        let user = this._user || this._getUserFromCache()

        if(user && user.token && user.expiry) {
            let currentTimestamp = timestamp();
            console.log('checking auth user expiry', user.expiry, currentTimestamp, user.expiry > currentTimestamp);
            return user.expiry > currentTimestamp;
        }
        return false;
    }

    user() {
        return this._user;
    }

    save(user) {
        cache.set(config.LOCAL_STORAGE_AUTH_KEY, base64Encode(JSON.stringify(user)));
        return this._user = user;
    }

    _getUserFromCache () {
        let data = cache.get(config.LOCAL_STORAGE_AUTH_KEY);

        console.log('retrieved auth user data', JSON.parse(base64Decode(data)));

        return data ? this._user = JSON.parse(base64Decode(data)) : false;
    }

}

export const authService = new AuthService();