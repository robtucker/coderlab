export const TOGGLE_NAVBAR = "TOGGLE_NAVBAR";
export const SET_NAVBAR_COLOR = "SET_NAVBAR_BACKGROUND";

export const toggleNavbar = () => ({type: TOGGLE_NAVBAR});

export const setNavbarColor = (color) => ({
    type: SET_NAVBAR_COLOR,
    color: color
});