import { connect } from "react-redux";
import {breakpoints} from "../styles";
import { Navbar } from "../components/navbar";

import { toggleNavbar, toggleMobileNavbar, hideMobileNavbar, logout } from "../actions";

let navMenu = [
    {
        id: 1,
        label: "Home",
        url: "/",
        className: ""
    },
    {
        id: 2,
        label: "Courses",
        url: "/courses",
        className: ""
    },
    {
        id: 3,
        label: "About",
        url: "/about",
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
    isMobile: state.app.width < breakpoints.sm,
    navbarVisible: state.navbar.navbarVisible,
    backgroundColor: state.navbar.backgroundColor,
    mobileNavbarVisible: state.navbar.mobileNavbarVisible,
    navbarVisible: state.navbar.navbarVisible,
    authDialogOpen: state.auth.authDialogOpen,
    authDialogType: state.auth.authDialogType,
    isLoggedIn: state.auth.isLoggedIn,
    loginInProgress: state.auth.requestInProgress,

});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => dispatch(toggleNavbar()),
    toggleMobile: () => dispatch(toggleMobileNavbar()),
    hideMobile: () => dispatch(hideMobileNavbar()),
    logout: logout
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
