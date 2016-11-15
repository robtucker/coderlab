import { connect } from "react-redux";

import { Navbar } from "./components/navbar";

import { TOGGLE_NAVBAR } from "./navbar.store";

let navMenu = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Courses",
        url: "/courses"
    },
    {
        id: 3,
        title: "Mentors",
        url: "/about"
    },
    {
        id:4,
        title: "Try Coding",
        url: "/learn"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    }
];

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    navMenu: navMenu,
    isVisible: state.navbar.isVisible,
    sidenavOpen: state.navbar.sidenavOpen,
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch({type: TOGGLE_NAVBAR});
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
