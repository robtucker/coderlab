import getMuiTheme from 'material-ui/styles/getMuiTheme';

import merge from "lodash.merge";

import configure from "./config";

import blueTheme from "./themes/blue-theme";

export const AppTheme = getMuiTheme(merge(configure(blueTheme), blueTheme));

import {
  fullBlack,
  darkBlack,
  lightBlack,
  minBlack,
  fullWhite,
  darkWhite,
  lightWhite,
} from './colors';

// make some of the variables easier to access for child components

export const palette = AppTheme.palette;

export const breakpoints = {
    xs: 0,
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140
};

export const textColors = {
    fullBlack,
    darkBlack,
    lightBlack,
    minBlack,
    fullWhite,
    darkWhite,
    lightWhite,
};