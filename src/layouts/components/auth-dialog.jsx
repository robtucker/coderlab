import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export const AuthDialog = ({dialogType, setDialogType, handleClose, isOpen}) => {
    
    const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={handleClose}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            onTouchTap={handleClose}
        />,
    ];

    return (
        <div>
            <Dialog
                title={dialogType}
                actions={actions}
                modal={false}
                open={isOpen}
                onRequestClose={handleClose}
            >
            The actions in this window were passed in as an array of React objects.
            </Dialog>
        </div>
    );
}