import {getAppStore} from "../store";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const SET_NAVBAR_COLOR = "SET_NAVBAR_BACKGROUND";

export const toggleNavbar = () => {
    let state = getAppStore().getState();
    return {value: !state.navbar.navbarVisible, type: TOGGLE_NAVBAR};
}

export const toggleSidebar = () => ({type: TOGGLE_SIDEBAR});

export const hideNavbar = () => ({type: HIDE_NAVBAR});

export const setNavbarColor = (color) => ({
    type: SET_NAVBAR_COLOR,
    color: color
});