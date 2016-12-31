import getMuiTheme from 'material-ui/styles/getMuiTheme';

import merge from "lodash.merge";

import configure from "./config";

import blueTheme from "./themes/blue-theme";

import typography from "./typography"

export { typography };

export const AppTheme = getMuiTheme(merge(configure(blueTheme), blueTheme));

// make some of the variables easier to access for other components

export const palette = AppTheme.palette;
