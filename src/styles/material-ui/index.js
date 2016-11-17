import getMuiTheme from 'material-ui/styles/getMuiTheme';

import merge from "lodash.merge";

import configure from "./config";

import blueTheme from "./themes/blue-theme";

import typography from "./typography"

export { typography };

export const AppTheme = getMuiTheme(merge(configure(blueTheme), blueTheme));

// make some of the variables easier to access for other components

export const palette = AppTheme.palette;

// if these get changed then remember to update the sass as well
export const breakpoints = {
    xs: 0,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
};

