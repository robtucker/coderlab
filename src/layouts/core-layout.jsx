import React, { Component } from "react";

import { NavbarContainer } from "./containers/navbar.container";

export const CoreLayout = ({children}) => (
    <div style={{ height: '100%'}}>
        <NavbarContainer />
        {children}
    </div>
)
