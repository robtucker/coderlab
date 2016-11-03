import { createStore, combineReducers } from 'redux';

import { navbarReducer } from "./layouts/navbar";

const appReducers = {
    navbar: navbarReducer
};

const AppStore = createStore(combineReducers(appReducers));

AppStore.asyncReducers = appReducers;

console.log(AppStore.getState());

export { AppStore };

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}