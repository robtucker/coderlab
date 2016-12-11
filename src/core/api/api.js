export class Api {

    constuctor(http, store) {
        this._http = http;
        this._store = store;
    }

    request(method, endpoint) {

        let state = store.getState();

        if(state.auth.isLoggedIn) {
            return this.http
        }
    }
    
    get(endpoint) {
        return this.request('GET', endpoint);
    }

    put(endpoint, data) {
        return this.request('PUT', endpoint, data);
    }

    post(endpoint, data) {
        return this.request('POST', endpoint, data);
    }
    
}

