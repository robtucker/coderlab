import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

//reducers
import * as reducers from "./reducers"
import { reducer as formReducer } from 'redux-form'
reducers.form = formReducer;

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

//console.log(store.getState());
export { store }

export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(combineReducers(store.asyncReducers));
}