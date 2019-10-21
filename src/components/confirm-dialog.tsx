import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ConfirmDialog = (props) => {

    return (
        <Dialog
            title={props.title}
            actions={actions}
            modal={props.modal}
            open={props.dialogIsOpen}
            onRequestClose={props.toggleDialog}>

            {props.children}

        </Dialog>
    );
}


export { ConfirmDialog }
