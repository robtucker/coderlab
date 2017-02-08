import React, {Component} from 'react'
import { Link, browserHistory } from 'react-router';

import { Field, reduxForm } from 'redux-form'
import { 
    renderTextField, 
    renderSubmitButtons } from '../../../components/form-fields'
import { FormValidator } from "../../../core/validators"
import { formConstants } from "../../../config";
import {palette} from "../../../styles";

const asyncValidate = () => {
    return true;
}

const validate = values => {
    return new FormValidator(values)
        .required(['addressLine1', 'city', 'postCode', 'phoneNumber'])
        .min('username', formConstants.USERNAME_MIN_LENGTH)
        .min('password', formConstants.PASSWORD_MIN_LENGTH)
        .getErrors();
}

class BookingForm extends Component {

    componentDidMount() {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://js.stripe.com/v2/';
        document.body.appendChild(script);
        script.onload = function() {
            Stripe.setPublishableKey(publishableKey);
        };
    }
    render() {
        let { handleSubmit, pristine, reset, submitting } = props;
        return (
            <div>
                <form onSubmit={handleSubmit(props.doSubmit)}
                    style={{minHeight: props.contentHeight}}
                    className="col justify-center align-center height-100">

                    <h2 className="margin-y-lg">{props.title || 'Book your course'}</h2>

                    <div>
                        <Field name="addressLine1" component={renderTextField} label="Address line 1"/>
                    </div>
                    <div>
                        <Field name="addressLine2" component={renderTextField} label="Address Line 2"/>
                    </div>
                    <div>
                        <Field name="city" component={renderTextField} label="City"/>
                    </div>
                    <div>
                        <Field name="county" component={renderTextField} label="County"/>
                    </div>
                    <div>
                        <Field name="postCode" component={renderTextField} label="Post Code"/>
                    </div>
                    <div>
                        <Field name="phoneNumber" component={renderTextField} label="Phone number"/>
                    </div>


                    {renderSubmitButtons(pristine, submitting)}
                </form>
            </div>
        );
    }
}

export const CourseBookingForm = reduxForm({
    form: 'courseBookingForm',  // a unique identifier for this form
    validate
})(BookingForm)