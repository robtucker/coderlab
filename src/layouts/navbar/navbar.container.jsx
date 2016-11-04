import { connect } from "react-redux";

import { Navbar } from "./navbar.component";


const mapStateToProps = (state) => ({
    title: state.navbar.title,
    isVisible: state.navbar.isVisible
});

const mapDispatchToProps = (dispatch) => ({
    toggleNavbar: () => {
        dispatch({type: "TOGGLE_NAVBAR"});
    }
})

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);
