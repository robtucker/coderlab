import { SCREEN_RESIZE, HIDE_NAVBAR, TOGGLE_NAVBAR } from "../actions";
import { AppTheme, editorThemes, breakpoints } from "../../styles";

// need these keys to obey specific order 
// iterating over objects doesn't guarantee order
let breakpointKeys = ['xl', 'lg', 'md', 'sm', 'xs'];

const getBreakpoint = (width) => {
    //console.log('fetching breakpoint for ' + width);
    for(var i = 0; i < breakpointKeys.length; i++) {
        if(width > breakpoints[breakpointKeys[i]]) {
            return breakpoints[breakpointKeys[i]];
        }
    }
}

const getContentHeight = (appHeight, navbarVisible) => {
    let height = appHeight - (navbarVisible ? AppTheme.appBar.height : AppTheme.appBar.minimizedHeight);
    if(height < editorThemes.common.minHeight) height = editorThemes.common.minHeight;
    //console.log('getContentHeight', height);
    return height;
}

let height = window.innerHeight;
let width = window.innerWidth;

let initialState = {
    width,
    height,
    contentHeight: getContentHeight(height, true),
    breakpoint: getBreakpoint(width),
    footerVisible: false,
}

export const app = (state = initialState, action) => {
    switch (action.type) {
    case HIDE_NAVBAR:
        return Object.assign({}, state, {contentHeight: getContentHeight(window.innerHeight, false)});
    case TOGGLE_NAVBAR:
        return Object.assign({}, state, {contentHeight: getContentHeight(window.innerHeight, action.value)});
    case SCREEN_RESIZE: 
        // console.log('screen resize', state, action);
        let height = window.innerHeight;
        let width = window.innerWidth;

        return Object.assign({}, state, {
            width,
            height,
            contentHeight: getContentHeight(height, action.navbarVisible),
            breakpoint: getBreakpoint(action.width)
        });
    default:
        return state;
    }
}