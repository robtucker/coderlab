import React, { Component } from "react";

import { NavbarContainer } from "../containers/navbar.container";
import { SnackbarContainer } from "../containers/snackbar.container";
//import { NotificationContainer } from "../../containers/notification.container";

//import {Footer} from "./footer";

export class AppLayout extends Component{

    componentWillMount() {
        console.log("mounting app component");
        console.log(this.props);
    }
    componentDidMount() {

        window.addEventListener("resize", ()=>{
            //console.log('app container has received resize event');
            this.props.handleScreenResize();
        });
    }

    render() {
        return (
            <div style={{ height: '100%'}}>
                <SnackbarContainer />
                <NavbarContainer />
                {this.props.children}
            </div>
        );
    }
}
// <NotificationContainer />