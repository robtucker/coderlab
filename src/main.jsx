/**
 * React Core
 */
import React from 'react';
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';

/**
 * configure the logger
 */
import { Logger, ConsoleHandler } from "isolog";

let config = {LOG_LEVEL: process.env.CONFIG.LOG_LEVEL_CONSOLE};

Logger.addHandler(new ConsoleHandler(config));

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

import { AppTheme } from "./styles";

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
    <MuiThemeProvider muiTheme={AppTheme}>
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