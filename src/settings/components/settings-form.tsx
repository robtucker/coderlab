import React from 'react'
import { Link, browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form'
import { 
    renderTextField, 
    renderPasswordField, 
    renderSubmitButtons } from '../../../components/form-fields'
import { FormValidator } from "../../common/core/validators"
import { formConstants } from "../../config";
import {palette} from "../../styles";

const asyncValidate = () => {
    return true;
}

const validate = values => {
    return new FormValidator(values)
        .required([])
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

                <h2 className="margin-y-lg">{props.title || 'Settings'}</h2>

                <div>
                    <Field name="username" component={renderTextField} label="First Name"/>
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
            </form>
        </div>
    );
}

export const SettingsForm = reduxForm({
    form: 'settingsForm',  // a unique identifier for this form
    validate
})(Form)