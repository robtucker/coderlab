import { connect } from "react-redux";
import {breakpoints} from "../styles";
import { Navbar } from "../components/navbar/navbar";

import { toggleNavbar, toggleSidebar, logout } from "../actions";

let navMenu = [
    {
        id: 1,
        label: "",
        url: "/",
        className: "width-auto min-width-25 img-logo-xs"
    },
    // {
    //     id: 2,
    //     label: "CoderLab",
    //     url: "/",
    //     className: "font-size-xl"
    // },
    {
        id: 3,
        label: "Mentors",
        url: "/mentors",
        className: ""
    },
    {
        id: 4,
        label: "Courses",
        url: "/courses",
        className: ""
    },
    // {
    //     id: 5,
    //     label: "Contact",
    //     url: "/contact",
    //     className: ""
    // }
];

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    navMenu: navMenu,
    isMobile: state.app.width < breakpoints.md,
    navbarVisible: state.navbar.navbarVisible,
    sidebarVisible: state.navbar.sidebarVisible,
    backgroundColor: state.navbar.backgroundColor,
    sidebarVisible: state.navbar.sidebarVisible,
    navbarVisible: state.navbar.navbarVisible,
    authDialogOpen: state.auth.authDialogOpen,
    authDialogType: state.auth.authDialogType,
    isLoggedIn: state.auth.isLoggedIn,
    loginInProgress: state.auth.requestInProgress,

});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => {
        dispatch(toggleSidebar());
    },
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    },
    logout: logout
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
