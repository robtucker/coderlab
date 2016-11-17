import { connect } from "react-redux";

import { Navbar } from "./components/navbar";

import { TOGGLE_NAVBAR } from "./navbar.store";

let navMenu = [
    {
        id: 1,
        label: "Home",
        url: "/"
    },
    {
        id: 2,
        label: "Courses",
        url: "/courses",
        // nestedItems: [
        //     {
        //         id: 1,
        //         url: "courses/web",
        //         label: "HTML/CSS",
        //     },
        //     {
        //         id: 2,
        //         url: "courses/game",
        //         label: "Game Development",
        //     },
        //     {
        //         id: 3,
        //         url: "courses/python",
        //         label: "Python",
        //     },
        //     {
        //         id: 4,
        //         url: "courses/javascript",
        //         label: "Javascript",
        //     },
        //     {
        //         id: 5,
        //         url: "courses/teacher",
        //         label: "Teacher Training",
        //     },
        //     {
        //         id: 6,
        //         url: "courses/advanced",
        //         label: "Advanced Programming",
        //     },
        // ]
    },
    {
        id: 3,
        label: "Mentors",
        url: "/mentors"
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
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch({type: TOGGLE_NAVBAR});
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
