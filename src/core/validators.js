import { errorMessages } from "../config";


// chainable validation methods
export class FormValidator {

    _errors;

    // always start with a new instance to get an empty errors object 
    constructor(values) {
        this._errors = {};
        this._values = values
    }

    getErrors() {
        return this._errors;
    }

    required(fields) {
        fields.forEach(field => {
            if (!this._values[ field ]) {
                this._errors[ field ] = errorMessages.REQUIRED
            }
        })
        return this
    }

    email (field = 'email') {   
        if (this._values[field] && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this._values[field])) {
            this._errors[field] = errorMessages.EMAIL_INVALID
        }
        return this;
    }

    password(field = "password") {
        //todo
        return this;
    }
    min(field, minLength) {
        if(this._values[field] && this._values[field].length < minLength) {
            this._errors[field] = `Minimum of ${minLength} characters`;
        }
        return this;
    }

    max(field, maxLength) {
        if(this._values[field] && this._values[field].length > maxLength) {
            this._errors[field] = `Maximum of ${maxLength} characters`;
        }
        return this;
    }

    passwordConfirmation(passwordField = "password", confirmationField="passwordConfirmation") {
        if(this._values[passwordField] !== this._values[confirmationField]) {
            this._errors[confirmationField] = errorMessages.PASSWORD_CONFIRMATION_INVALID;
        }
        return this;
    }

    regex(field, regex, errorMessage) {
        if (this._values[field] && !regex.test(this._values[field])) {
            this._errors[field] = errorMessage
        }
        return this
    }
}
