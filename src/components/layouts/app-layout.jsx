import React, { Component } from "react";

import { NavbarContainer } from "../../containers/navbar.container";
import { SnackbarContainer } from "../../containers/snackbar.container";
import { NotificationContainer } from "../../containers/notification.container";
import {Footer} from "./footer";

export class AppLayout extends Component{

    componentDidMount() {
        // console.log("app component did mount");
        // console.log(this.props);

        window.addEventListener("resize", ()=>{
            //console.log('app container has received resize event');
            this.props.handleScreenResize(window.innerWidth, window.innerHeight);
        });
    }

    render() {
        return (
            <div style={{ height: '100%'}}>
                <NavbarContainer />
                <NotificationContainer />
                <SnackbarContainer />
                {this.props.children}
                <Footer isVisible={this.props.footerVisible}/>
            </div>
        );
    }
}
