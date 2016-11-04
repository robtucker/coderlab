/**
 * React Core
 */
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

/**
 * Custom stylesheet - OOCSS styles
 */
import * as CSS from "./styles/main.scss";

/**
 * customize the material design theme
 */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from "./styles";

const APP_THEME = getMuiTheme(muiTheme);

/**
 * Material-UI requires injectTapEventPlugin
 * for touch tap events (which are faster than onclick)
 */
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/**
 * Application level components
 */
const APPLICATION = (
    <MuiThemeProvider muiTheme={APP_THEME}>
        <Provider store={store}>
            <Router history={browserHistory} children={AppRoutes} />
        </Provider>
    </MuiThemeProvider>
);

/**
 * where to render the app
 */
const MOUNT_NODE = document.getElementById('app'); 

/**
 * Go!
 */
ReactDOM.render(APPLICATION, MOUNT_NODE);