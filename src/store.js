import { createStore, combineReducers } from 'redux';

import { navbarReducer } from "./layouts/navbar";


const appReducers = {
    navbar: navbarReducer
};

const store = createStore(combineReducers(appReducers));

store.asyncReducers = appReducers;

console.log(store.getState());

export { store };

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}