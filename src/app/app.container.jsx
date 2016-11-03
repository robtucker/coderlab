import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { AppStore } from "./app.store";
import { AppRoutes } from "./app.routes";

import { Navbar } from "./navbar";

console.log(AppStore);
console.log(AppRoutes);

export class AppContainer extends Component {
    
    componentWillMount() {
        console.log(this);
    }  

    render() {
        return (
            <Provider store={AppStore}>
                <div style={{ height: '100%' }}>
                    <Navbar />
                    <Router history={browserHistory} children={AppRoutes} />
                </div>
            </Provider>
        );
    }
}

