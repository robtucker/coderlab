import { connect } from "react-redux";

import { Navbar } from "../components/navbar/navbar";

import { toggleNavbar } from "../actions";

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
    backgroundColor: state.navbar.backgroundColor,
    sidenavOpen: state.navbar.sidenavOpen,
    authDialogOpen: state.auth.authDialogOpen,
    authDialogType: state.auth.authDialogType,
    isLoggedIn: state.auth.isLoggedIn,
    loginInProgress: state.auth.requestInProgress
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch(toggleNavbar());
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
