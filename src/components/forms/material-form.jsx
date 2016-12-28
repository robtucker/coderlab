import React from 'react'
import { Link, browserHistory } from 'react-router';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        type="text"
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

export const renderPasswordField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        type="password"
        errorText={touched && error}
        {...input}
        {...custom}
    />
)

export const renderCheckbox = ({ input, label }) => (
    <Checkbox label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}/>
)

export const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup {...input} {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}/>
)

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
        // floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}/>
)



export const renderSubmitButtons = (pristine, submitting) => (
    <div className="margin-y-lg">
        <RaisedButton
            className="margin-x-xs"
            label="Submit"
            primary={true}
            type="submit"
            disabled={pristine || submitting}/>

        <RaisedButton
            className="margin-x-xs"
            label="Cancel"
            primary={false}
            onTouchTap={() => {browserHistory.push('/')}}/>
    </div>
)

