import { createStore, combineReducers } from 'redux';
import { Logger } from "isolog";

import * as reducers from "./reducers"

console.log(reducers);

const store = createStore(combineReducers(reducers));

store.asyncReducers = reducers;

Logger.debug('initialise application store');
Logger.debug(store.getState());

export default store;

export { store };

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}