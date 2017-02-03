import { createStore, combineReducers, applyMiddleware } from 'redux';
import config from "./config";
import throttle from "lodash/throttle";

// middleware
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

//reducers
import * as reducers from "./reducers"
import { reducer as formReducer } from 'redux-form'
reducers.form = formReducer;

const loggerMiddleware = createLogger();

const getPersistedState = () => {
    try {
        let cached = localStorage.getItem(config.STATE_CACHE_KEY || 'state');
        if(cached === null) return undefined;
        return JSON.parse(cached);
    } catch(e) {
        return undefined;
    }
}

export const persistState = (state) => {
    try {
        localStorage.setItem(config.STATE_CACHE_KEY || 'state', JSON.stringify(state));
    } catch(e) {
        // todo - log
        return null;
    }
    
}

const store = createStore(
    combineReducers(reducers), 
    //getPersistedState(),
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware,
    )
);

// maintain a reference to the original set of reducers that we passed in
// this enables the injectReducer function for async reducers
store.asyncReducers = reducers;

//persist the state to local storage once every second
store.subscribe(throttle(() => {
    persistState(store.getState());
}), 1000);

let persistanceThrottle = config.STORE_PERSISTANCE_THROTTLE || 1000;

// allow other services to access the store directly 
// should only be used in exceptional circumstances
export const getAppStore = () => {
    return store;
}

//console.log(store.getState());
export { store }

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}