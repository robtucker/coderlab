import {getAppStore} from "../../store";
//export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const HIDE_NAVBAR = "HIDE_NAVBAR";
export const TOGGLE_MOBILE_NAVBAR = "TOGGLE_MOBILE_NAVBAR"
export const HIDE_MOBILE_NAVBAR = "HIDE_MOBILE_NAVBAR"
export const SET_NAVBAR_COLOR = "SET_NAVBAR_BACKGROUND";

export const toggleNavbar = () => {
    let state = getAppStore().getState();
    return {value: !state.navbar.navbarVisible, type: TOGGLE_NAVBAR};
}

export const hideNavbar = () => ({type: HIDE_NAVBAR});

export const toggleMobileNavbar = () => ({type: TOGGLE_MOBILE_NAVBAR});

export const hideMobileNavbar = () => ({type: HIDE_MOBILE_NAVBAR});

//export const toggleSidebar = () => ({type: TOGGLE_SIDEBAR});

export const setNavbarColor = (color) => ({type: SET_NAVBAR_COLOR, color});