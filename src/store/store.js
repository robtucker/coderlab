import { createStore, combineReducers } from 'redux';

import { navbarReducer } from "../layouts/navbar";

const initialState = process.env.CONFIG;

const configReducer = (state = initialState, action) => {
    return state;
}

const appReducers = {
    config: configReducer,
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