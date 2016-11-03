import { createStore, combineReducers } from 'redux';

import { navbar } from "./navbar";

export const makeRootReducer = (asyncReducers) => {
    return combineReducers(Object.assign({}, asyncReducers))
}

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

const reducers = combineReducers({
    navbar
});

export const AppStore = createStore(reducers);
