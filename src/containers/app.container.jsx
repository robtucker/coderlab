import { connect } from "react-redux";
import { screenResize } from "../actions";
import { AppLayout } from "../components";

const mapStateToProps = (state) => ({
    appHeight: state.app.height,
    footerVisible: state.app.footerVisible
});


const mapDispatchToProps = (dispatch) => ({

    handleScreenResize: () => {
        dispatch(screenResize(window.innerWidth, window.innerHeight))
    }
    
})

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppLayout);
