import React from 'react'
import { Link, browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form'
import { renderTextField, renderPasswordField, renderSubmitButtons } from '../../../components/form-fields'
import { FormValidator } from "../../../core/validators"
import { formConstants } from "../../../config";
import {palette} from "../../../styles";

const asyncValidate = () => {
    return true;
}

const validate = values => {
    return new FormValidator(values)
        .required([ 'firstName', 'lastName', 'email', 'password', 'passwordConfirmation' ])
        .email()
        .min('username', formConstants.USERNAME_MIN_LENGTH)
        .min('password', formConstants.PASSWORD_MIN_LENGTH)
        .password()
        .passwordConfirmation()
        .getErrors();
}

const Form = (props) => {
    let { handleSubmit, pristine, reset, submitting } = props;
    return (
        <div>
            <form onSubmit={handleSubmit(props.doSubmit)} 
                style={{minHeight: props.contentHeight}}
                className="col justify-center align-center height-100">

                <h2 className="margin-y-lg">{props.title || 'Create an account'}</h2>

                <div>
                    <Field name="username" component={renderTextField} label="username"/>
                </div>

                <div>
                    <Field name="firstName" component={renderTextField} label="First Name"/>
                </div>
                <div>
                    <Field name="lastName" component={renderTextField} label="Last Name"/>
                </div>
                <div>
                    <Field name="email" component={renderTextField} label="Email"/>
                </div>
                <div>
                    <Field name="password" component={renderPasswordField} label="Password"/>
                </div>
                <div>
                    <Field name="passwordConfirmation" component={renderPasswordField} label="Confirm password"/>
                </div>


                {renderSubmitButtons(pristine, submitting)}

                <Link 
                    to="login" 
                    className="cursor-pointer text-decoration-underline margin-y-lg" 
                    style={{color: palette.accent3Color}}>
                    Already have an account? Login here.
                </Link>

            </form>
        </div>
    );
}

export const RegisterForm = reduxForm({
    form: 'registerForm',  // a unique identifier for this form
    validate
})(Form)