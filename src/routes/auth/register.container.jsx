import { connect } from "react-redux";

import { RegisterForm } from "./components/register-form";

import { postRegister } from "../../actions";

const mapStateToProps = (state) => ({
    authRedirect: state.auth.authRedirect
});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: postRegister,
})

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
