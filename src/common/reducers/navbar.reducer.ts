import { palette } from "../../styles";

import {TOGGLE_NAVBAR, TOGGLE_MOBILE_NAVBAR, HIDE_NAVBAR, SET_NAVBAR_COLOR} from "../actions";

let initialState = {
    navbarVisible: true,
    mobileNavbarVisible: false,
    //sidebarVisible: false,
    backgroundColor: palette.primary1Color
}

export const navbar = (state = initialState, action) => {

    switch (action.type) {
    // case TOGGLE_SIDEBAR:
    //     return Object.assign({}, state, {sidebarVisible: !state.sidebarVisible});    
    case TOGGLE_MOBILE_NAVBAR:
        return Object.assign({}, state, {mobileNavbarVisible: !state.mobileNavbarVisible});       
    case TOGGLE_NAVBAR:
        return Object.assign({}, state, {navbarVisible: action.value});    
    case HIDE_NAVBAR:
        return Object.assign({}, state, {navbarVisible: false});
    case SET_NAVBAR_COLOR:
        return Object.assign({}, state, {backgroundColor: action.color || palette.primary1Color});
    default: 
        return state;
    }

};