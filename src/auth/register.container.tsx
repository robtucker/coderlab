import { connect } from "react-redux";

import { RegisterForm } from "./components/register-form";

import { postRegister } from "../common/actions";

const mapStateToProps = (state) => ({
    authRedirect: state.auth.authRedirect,
    contentHeight: state.app.contentHeight

});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: postRegister,
})

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
