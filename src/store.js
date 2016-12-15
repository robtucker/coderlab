import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { Logger } from "isolog";
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from "./reducers"

//Logger.debug(reducers);

const loggerMiddleware = createLogger();

const store = createStore(
    combineReducers(reducers), 
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware,
    )
);

store.asyncReducers = reducers;

export const getAppStore = () => {
    return store;
}

console.log(store.getState());
export { store }

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}