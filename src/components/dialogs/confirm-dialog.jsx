import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ConfirmDialog = (props) => {

    return (
        <Dialog
            title={titles[props.dialogType] || "Login"}
            titleStyle={{textAlign: 'center'}}
            actions={actions}
            actionsContainerStyle={{textAlign: 'center'}}
            modal={false}
            open={props.dialogIsOpen}
            onRequestClose={props.toggleDialog}>

            {props.children}

        </Dialog>
    );
}


export { ConfirmDialog }

// import React, { Component } from 'react';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

// export class AuthDialog extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         }
//     }
//     handleUsernameChange (event) {
//         this.setState({username: event.target.value,});
//     };

//     handlePasswordChange (event) {
//         this.setState({password: event.target.value});
//     };

//     render() {

//         const actions = [
//             <FlatButton
//                 label="Cancel"
//                 primary={true}
//                 onTouchTap={this.props.handleClose}
//             />,
//             <FlatButton
//                 label="Submit"
//                 primary={true}
//                 onTouchTap={this.props.handleSubmit}
//             />,
//         ];

//         return (
//             <Dialog
//                 title={this.props.dialogType}
//                 actions={actions}
//                 modal={false}
//                 open={this.props.isOpen}
//                 onRequestClose={this.props.handleClose}>

//                 <TextField
//                     id="username"
//                     value={this.state.username}
//                     onChange={this.handleUsernameChange}
//                     hintText="username"/>

//                 <br/><br/>

//                 <TextField
//                     id="password"
//                     value={this.state.password}
//                     onChange={this.handlePasswordChange}
//                     hintText="password"/>

                

//             </Dialog>
//         );
//     }
// }