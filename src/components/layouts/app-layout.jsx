import React, { Component } from "react";

import { NavbarContainer } from "../../containers/navbar.container";
import { SnackbarContainer } from "../../containers/snackbar.container";
import { NotificationContainer } from "../../containers/notification.container";

export const AppLayout = ({children}) => (
    <div style={{ height: '100%'}}>
        <NavbarContainer />
        <NotificationContainer />
        <SnackbarContainer />
        {children}
    </div>
)
