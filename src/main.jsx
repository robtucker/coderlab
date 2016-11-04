import React from 'react';
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';

/**
 *  Redux store - aka the application state tree
 */
import { store } from "./store";

/**
 * make the store available to all child components
 * through the react-redux bindings
 */
import { Provider } from 'react-redux';

/**
 * the application itself comes in via the route config
 * which holds all the components in a tree
 */
import { AppRoutes } from "./routes";

import CSS from "./styles/main.scss";

/**
 * set the application's material design theme
 * custom styles are defined in the styles folder
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from "./styles";

const APP_THEME = getMuiTheme(muiTheme);

const APPLICATION = (
    <MuiThemeProvider muiTheme={APP_THEME}>
        <Provider store={store}>
            <Router history={browserHistory} children={AppRoutes} />
        </Provider>
    </MuiThemeProvider>
);

const MOUNT_NODE = document.getElementById('app'); 

ReactDOM.render(APPLICATION, MOUNT_NODE);