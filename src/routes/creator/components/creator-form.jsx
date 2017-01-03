import React from 'react'
import { Link, browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form'
import { renderTextField, renderPasswordField, renderSubmitButtons } from '../../../components'
import { FormValidator } from "../../../core"
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
        <form onSubmit={handleSubmit(props.doSubmit)} className="col justify-center align-center margin-y-xxl height-100">

            <h2 className="margin-bottom-lg">{props.title || 'Settings'}</h2>

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
        </form>
    );
}

export const CreatorForm = reduxForm({
    form: 'creatorForm',  // a unique identifier for this form
    validate
})(Form)