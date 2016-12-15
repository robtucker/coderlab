import { connect } from "react-redux";

import { Auth } from "./components/auth";

import { 
    setAuthUsername,
    setAuthFirstName,
    setAuthLastName,
    setAuthPassword,
    setAuthPasswordConfirmation,
    postAuth
} from "../../actions";

const mapStateToProps = (state) => ({
    dialogIsOpen: state.auth.authDialogOpen,
    dialogType: state.auth.authDialogType,
    loadInProgress: state.auth.requestInProgress,
    username: state.auth.username,
    password:state.auth.password,
    passwordConfirmation: state.auth.passwordConfirmation,
    firstName: state.auth.firstName,
    lastName: state.auth.lastName,

});

const mapDispatchToProps = (dispatch) => ({

    setAuthUsername: (username) => {
        dispatch(setAuthUsername(username))
    },
    setAuthFirstName: (firstName) => {
        dispatch(setAuthFirstName(firstName))
    },
    setAuthLastName: (lastName) => {
        dispatch(setAuthLastName(lastName))
    },
    setAuthPassword: (password) => {
        dispatch(setAuthPassword(password))
    },
    setAuthPasswordConfirmation: (passwordConfirmation) => {
        dispatch(setAuthPasswordConfirmation(passwordConfirmation))
    },
    postAuth: postAuth,
})

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);
