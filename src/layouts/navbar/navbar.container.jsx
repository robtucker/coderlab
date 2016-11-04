import { connect } from "react-redux";

import { Navbar } from "./navbar.component";

import { TOGGLE_NAVBAR } from "./navbar.store";

const mapStateToProps = (state) => ({
    title: state.navbar.title,
    isVisible: state.navbar.isVisible,
    sidenavOpen: state.navbar.sidenavOpen
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch({type: TOGGLE_NAVBAR});
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
