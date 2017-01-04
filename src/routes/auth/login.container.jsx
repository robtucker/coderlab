import { connect } from "react-redux";

import { LoginForm } from "./components/login-form";

import { postLogin } from "../../actions";

const mapStateToProps = (state) => ({
    authRedirect: state.auth.authRedirect,
    contentHeight: state.app.contentHeight
});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: postLogin
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
