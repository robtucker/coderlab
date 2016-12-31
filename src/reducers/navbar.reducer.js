import { palette } from "../styles";

import {TOGGLE_NAVBAR, TOGGLE_SIDEBAR, HIDE_NAVBAR, SET_NAVBAR_COLOR} from "../actions";

let initialState = {
    navbarVisible: true,
    sidebarVisible: false,
    backgroundColor: palette.primary1Color
}

export const navbar = (state = initialState, action) => {

    switch (action.type) {
    case TOGGLE_SIDEBAR:
        return Object.assign({}, state, {sidebarVisible: !state.sidebarVisible});       
    case TOGGLE_NAVBAR:
        return Object.assign({}, state, {navbarVisible: !state.navbarVisible});    
    case HIDE_NAVBAR:
        return Object.assign({}, state, {navbarVisible: false});
    case SET_NAVBAR_COLOR:
        return Object.assign({}, state, {backgroundColor: action.color || palette.primary1Color});
    default: 
        return state;
    }

};