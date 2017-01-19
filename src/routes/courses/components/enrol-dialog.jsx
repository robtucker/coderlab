import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { browserHistory } from "react-router";

const EnrolDialog = (props) => {
    console.log('EnrolDialog', props);
    const actions = (
        <div className="margin-y-lg">

            <RaisedButton
                className="margin-x-xs"
                label="Cancel"
                primary={false}
                onTouchTap={props.toggle}/>

            <RaisedButton
                className="margin-x-xs"
                label={props.isLoggedIn ? "Let's go!" : "Sign up"}
                primary={true}
                onTouchTap={() => {
                    if(!props.isLoggedIn) {
                        return browserHistory.push('/register');
                    } else {
                        props.startCourse(props.course);
                        return browserHistory.push(`courses/${props.course.slug}/level/1/1`);
                    }
                }}/>
        </div>
    );

    var body;

    if(!props.isLoggedIn) {
        body = (
            <div>In order to save your progress, we need to set up an account for you. This should only take 30 seconds</div>
        );
    } else {
        body = (
            <div>It's time to get our {props.course.title} on. Let's do this thing!</div>
        )
    }


    return (
        <Dialog
            title={`Are you ready?`}
            actions={actions}
            modal={props.modal}
            open={props.open}
            onRequestClose={props.toggle}>
            {body}
        </Dialog>
    );
}


export { EnrolDialog }
