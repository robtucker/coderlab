import { SCREEN_RESIZE } from "../actions";
import { breakpoints } from "../styles";

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

let initialState = {
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth)
}

export const app = (state = initialState, action) => {
    switch (action.type) {

    case SCREEN_RESIZE: 
        //console.log('reducer receive screen resize event', action);
        return Object.assign({}, state, {
            width: action.width, 
            height: action.height, 
            breakpoint: getBreakpoint(action.width)
        });
    default:
        return state;
    }
}