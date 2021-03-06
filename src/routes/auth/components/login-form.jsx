import React from 'react'
import { Link, browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form'
import config, { formConstants } from "../../../config";

import { renderTextField, renderPasswordField, renderSubmitButtons } from '../../../components/form-fields'
import RaisedButton from 'material-ui/RaisedButton';
import { FormValidator } from "../../../core/validators"
import {palette} from "../../../styles";

const asyncValidate = () => {
    return true;
}

const validate = values => {
    return new FormValidator(values)
        .required(['username', 'password'])
        .min('username', formConstants.USERNAME_MIN_LENGTH)
        .min('password', formConstants.PASSWORD_MIN_LENGTH)
        .getErrors();
}


const Form = (props) => {
    //console.log(props);
    let { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div>
            <form onSubmit={handleSubmit(props.doSubmit)} 
                style={{minHeight: props.contentHeight}}
                className="col justify-center align-center height-100">

                <h2 className="margin-y-lg">Login</h2>

                <div>
                    <Field name="username" component={renderTextField} label="Username"/>
                </div>
                <div>
                    <Field name="password" type="password" component={renderPasswordField} label="Password"/>
                </div>

                {renderSubmitButtons(pristine, submitting)}

                <Link 
                    to="register" 
                    className="cursor-pointer text-decoration-underline margin-y-lg" 
                    style={{color: palette.accent3Color}}>
                    Don't have an account? Sign up here
                </Link>
            </form>
        </div>
    );
}

export const LoginForm = reduxForm({
    form: 'loginForm', 
    validate
})(Form)