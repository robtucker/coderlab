import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { browserHistory } from "react-router";

const EnrolDialog = (props) => {
    // console.log('EnrolDialog', props);
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
                        props.setAuthRedirect(`courses/${props.course.slug}`);
                        return browserHistory.push('/register');
                    } else {
                        props.startCourse(props.course);
                    }
                }}/>
        </div>
    );

    var title;
    var body;

    if(!props.isLoggedIn) {
        title = `Create an account`
        body = (
            <div>In order to start a course we'll need to quickly set up an account for you. This should only take 30 seconds</div>
        );

    } else if(props.course.type === 'web'){
        title = "Let's do this thing!"
        body = (
            <div>
                <p>This is a free course that consists mostly of online challenges along with videos and instructions.
                It has been created mostly for beginners.</p>
                <p>It's time to get our {props.course.title} on.</p>
            </div>
        )
    } else {
        title = "It's time for some one-on-one training!"
        body = (
            <div>
                <p>This is a paid course costing {props.course.price} in which an instructor will sit down with you and teach you one on one.</p>
                <p>All you need to do is arrange a time and a place, and we'll introduce you to your instructor.</p>
                <p>Next up we're going to take you to a payment page where you'll be able to book in your course.</p>
            </div>
        )
    }


    return (
        <Dialog
            title={title}
            actions={actions}
            modal={props.modal}
            open={props.open}
            onRequestClose={props.toggle}>
            {body}
        </Dialog>
    );
}


export { EnrolDialog }
