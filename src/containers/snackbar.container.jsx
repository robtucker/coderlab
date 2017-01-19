import { connect } from "react-redux";
import {hideSnackbar} from "../actions";
import {Snackbars} from "../components/snackbars";


const mapStateToProps = (state) => ({
    snackbars: state.snackbars
});

const mapDispatchToProps = (dispatch) => ({
    close: (id) => dispatch(hideSnackbar(id))
})

export const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(Snackbars);
