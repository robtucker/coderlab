import { connect } from "react-redux";

import {Snackbars} from "../components/notifications/snackbars";


const mapStateToProps = (state) => ({
    snackbars: state.snackbars
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(Snackbars);
