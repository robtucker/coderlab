import { connect } from "react-redux";

import { LoginForm } from "./components/login-form";

import { postLogin } from "../../actions";

const mapStateToProps = (state) => ({
    authRedirect: state.auth.authRedirect
});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: postLogin
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
