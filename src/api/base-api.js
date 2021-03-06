import fetch from 'isomorphic-fetch'
import {browserHistory} from "react-router";
import config from "../config";
import { UrlParameterError } from "../core/exceptions";
import {format} from "url";
import { getAppStore } from "../store";
import {authService} from "../core/auth-service";

var httpService = fetch;

//override the fetch api in development
if (config.MOCK_API) {
    httpService = require("./mock-http");
}

export class BaseApi {

    _entity;
    _baseUrl;
    _httpCache = config.FETCH_CACHE_MODE;

    constructor() {
        this._http = httpService;
        this._setBaseUrl();
    }

    get(endpoint, params, query) {
        return this._request('GET', endpoint, params, null, query);
    }

    put(endpoint, params, body) {
        return this._request('PUT', endpoint, params, body);
    }

    post(endpoint, params, body) {
        return this._request('POST', endpoint, params, body);
    }
    
    delete(endpoint, params, body) {
        return this._request('DELETE', endpoint, params, body);
    }

    isSuccess(response) {
        return response.status >= 200 && response.status < 300;
    }

    _request(method, endpoint, params, body, query, cacheResponse = false) {
        console.log('new api request', method, endpoint, params, body, query, cacheResponse);
        return new Promise((resolve, reject) => {
            
            let state = this._state();

            var options = {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: config.FETCH_HTTP_MODE || 'cors',
                cache: this._httpCache
            };

            if(body) {
                options.body = JSON.stringify(body);
            }
            console.log('creating http req auth', state.auth.isLoggedIn);
            if(state.auth.isLoggedIn) {
                options.headers['x-access-token'] = state.auth.user.token;
            }
            
            let actionType = this._createActionType(method, endpoint);
            let url = this._createUrl(endpoint, params, query);

            this._dispatch({url, params, method, body, query, type: `${actionType}_REQUEST`});

            let request = this._http(url, options);
        
            request.then((response) => {
                //console.log('request success', response);

                let e = {url, endpoint, params, method, status: response.status};
                let s = this.isSuccess(response);

                response.json()
                    .then((body) => {
                        if(s) {
                            this._dispatch(Object.assign({}, e, {type: `API_SUCCESS`, body}));
                            this._dispatch(Object.assign({}, e, {type: `${actionType}_SUCCESS`, body}));
                        } else if (response.status === 403){
                            authService.logout()
                            browserHistory.push('/login');
                        } else {
                            this._dispatch(Object.assign({}, e, {type: `API_ERROR`, body}));
                            this._dispatch(Object.assign({}, e, {type: `${actionType}_ERROR`, body}));
                        }
                        resolve(body);
                    })
                    .catch((err) => {
                        this._dispatch(Object.assign({}, e, {type: `API_PARSE_ERROR`, body: null}));
                        reject(err)
                    });

                if(cacheResponse && this.isSuccess(response)) this._cache(data);
            });

            // There was a problem connecting to the api
            request.catch((error) => {
                //console.log('request error', error);
                this._dispatch({type: `API_ERROR`, errors: [{message: "There was a problem connecting to the server", error}]});
                this._dispatch({type: `${actionType}_ERROR`, errors: [error]});
                //throw the error again to give the client a chance to handle it on its own
                reject(error);
            })

        })
    }

    _cache(data) {
        this.db.set(this._entity, data);
    }

    _forceRelod() {
        return this._setHttpCacheType('reload');
    }

    _setHttpCacheType(val) {
        this._httpCache = val || config.FETCH_CACHE_MODE;
        return this;
    }

    _setBaseUrl() {
        let url = config.API_URL;

        // if(config.API_PORT !== 80 || config.API_PORT !== 443) {
        //     url += ":" + config.API_PORT;
        // }

        this._baseUrl = url;
    }

    _createUrl(endpoint, params, query) {
        //console.log('creating url', endpoint, params)
        let endpointWithParams = endpoint.replace(/:([^:\/]+)/g, (match) => {
            let i = match.substr(1);
            //console.log('matched url param',  i);
            if(!params[i]) {
                throw new UrlParameterError(`The ${i} parameter was not supplied`)
            }
            return params[i];
        });

        //console.log(endpointWithParams);

        if(endpointWithParams.charAt(0) !== "/") {
            endpointWithParams = '/' + endpointWithParams;
        }

        let url = this._baseUrl + '/' + this._entity + endpointWithParams;

        if(query) {
            url += format({ query: query });
        }
        //console.log('created url', url)
        return url;
    }

    _createActionType(method, endpoint) {
        let parts = endpoint.split('/');
        let action = `API_${method}_${this._entity}`;
        //console.log('creating action type');
        parts.map((fragment, index) => {
            if(fragment && fragment.length) {   
                //console.log('fragment has been found', fragment, fragment.length);         
                if(fragment.charAt(0) === ':') {
                    fragment = fragment.substr(1);
                }
                //console.log(fragment, index, parts[index -1]);
                if(fragment !== this._entity && fragment !== parts[index -1]) {
                //console.log(fragment, index);
                    action += `_${fragment}`;
                }
            }
        });
        return action.toUpperCase();
    }

    _state() {
        return getAppStore().getState();
    }

    _dispatch(action) {
        return getAppStore().dispatch(action);
    }   
}
