import React, { Component } from "react";

import { NavbarContainer } from "./navbar/navbar.container";

class AppContainer extends Component {

    render () {
        return (         
            <div style={{ height: '100%'}}>
                <NavbarContainer />
                {this.props.children}
            </div>
        );
    }

}