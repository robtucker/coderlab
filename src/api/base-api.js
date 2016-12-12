import fetch from 'isomorphic-fetch'
import { getStore } from "../store";
import config from "../config";

export class BaseApi {

    constructor() {
        this._http = !config.MOCK_API ? fetch : require("./mock-http");
        this._setBaseUrl();
    }

    _dispatcher() {
        return getStore().dispatch;
    }

    _state() {
        return getStore().getState();
    }

    request(method, endpoint) {

        let state = this._state();

        var options = {
            method: method,
            headers: {},
            mode: 'cors',
            cache: 'default' 
        };

        if(state.auth.isLoggedIn) {
            options.headers['x-access-token'] = state.auth.token;
        }

        return this._http(this._createUrl(endpoint), options);
    }

    _setBaseUrl() {
        let url = config.API_URL;

        if(config.API_PORT !== 80) {
            url += ":" + config.API_PORT;
        }
        this._baseUrl = url;
    }

    _createUrl(endpoint) {
        if(endpoint.charAt(0) !== "/") {
            endpoint = '/' + endpoint;
        }

        return this._baseUrl + endpoint;
    }
    
    get(endpoint, token) {
        return this.request('GET', endpoint);
    }

    put(endpoint, data, token) {
        return this.request('PUT', endpoint, data);
    }

    post(endpoint, data, token) {
        return this.request('POST', endpoint, data);
    }
    
}
