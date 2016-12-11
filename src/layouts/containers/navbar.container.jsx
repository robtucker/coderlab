import { connect } from "react-redux";

import { Navbar } from "../navbar/navbar";

import { toggleNavbar, toggleAuthDialog, setAuthDialogType } from "../../actions";

let navMenu = [
    {
        id: 1,
        label: "Home",
        url: "/"
    },
    {
        id: 2,
        label: "Mentors",
        url: "/mentors"
    },
    {
        id: 3,
        label: "Courses",
        url: "/courses",
    },
    {
        id: 4,
        label: "Contact",
        url: "/contact"
    }
];

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    navMenu: navMenu,
    isVisible: state.navbar.isVisible,
    sidenavOpen: state.navbar.sidenavOpen,
    authDialogOpen: state.auth.authDialogOpen,
    authDialogType: state.auth.authDialogType,
    isLoggedIn: state.auth.isLoggedIn,
    loginInProgress: state.auth.requestInProgress
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    },
    toggleAuthDialog: () => {
        dispatch(toggleAuthDialog());
    },
    setAuthDialogType: (authType) => {
        dispatch(setAuthDialogType(authType));
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
