import { connect } from "react-redux";

import { Navbar } from "./components/navbar";

import { TOGGLE_NAVBAR } from "./navbar.store";

const mapStateToProps = (state) => ({
    appTitle: state.config.APP_TITLE,
    isVisible: state.navbar.isVisible,
    sidenavOpen: state.navbar.sidenavOpen
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch({type: TOGGLE_NAVBAR});
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
