import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import {palette} from "../../../styles";

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Auth = (props) => {

    const pathName = props.location.pathname;
    const authType = pathName.charAt(0) === '/' ? pathName.substr(1) : pathName;
    const oppositeType = authType === 'register' ? "login" : "register";
    
    const titles = {
        login: "Login",
        register: "Create a new account"
    };

    const switchText = {
        login: "Don't have an account? Sign up here",
        register: "Already have an account? Login here"
    };

    const isRegister = authType === "register";

    let firstName = null;
    let lastName = null;
    let passwordConfirmation = null;

    if(isRegister) {
        firstName = (
            <TextField
                id="firstName"
                value={props.firstName}
                onChange={(event) => {props.setAuthFirstName(event.target.value)}}
                hintText="first name"/>
        );

        lastName = (
            <TextField
                id="lastName"
                value={props.lastName}
                onChange={(event) => {props.setAuthLastName(event.target.value)}}
                hintText="last name"/>
        );

        passwordConfirmation = (         
            <div>       
                <TextField
                    id="passwordConfirmation"
                    value={props.passwordConfirmation}
                    onChange={(event) => {props.setAuthPasswordConfirmation(event.target.value)}}
                    hintText="confirm password"
                    type="password"/>
            </div>
        );
    }


    return (
        <section className="col align-center justify-center text-xs-center margin-y-xl">

            <h2 className="margin-bottom-lg">{titles[authType]}</h2>

            <TextField
                id="username"
                value={props.username}
                onChange={(event) => {props.setAuthUsername(event.target.value)}}
                hintText="username"/>
            
            {firstName}
            {lastName}

            <TextField
                id="password"
                value={props.password}
                onChange={(event) => {props.setAuthPassword(event.target.value)}}
                hintText="password"
                type="password"/>
            
            {passwordConfirmation}
            
            <div className="margin-y-lg">
                <RaisedButton
                    className="margin-x-xs"
                    label="Submit"
                    primary={true}
                    onTouchTap={props.login}/>

                <RaisedButton
                    className="margin-x-xs"
                    label="Cancel"
                    primary={false}
                    onTouchTap={() => {browserHistory.push('/')}}/>


            </div>


            <Link 
                to={oppositeType} 
                className="cursor-pointer text-decoration-underline" 
                style={{color: palette.accent3Color}}>
                {switchText[authType]}
            </Link>

        </section>             

    );
}


export { Auth }
