import { createStore, combineReducers } from 'redux';

import { navbar } from "./navbar";

const appReducers = {
    navbar
};

export const makeRootReducer = (asyncReducers) => {
    return combineReducers(Object.assign({}, asyncReducers))
}

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}

const AppStore = createStore(combineReducers({
    navbar
}));


AppStore.asyncReducers = appReducers;

export { AppStore };