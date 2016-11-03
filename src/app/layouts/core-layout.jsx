import React, { Component } from "react";

import { Navbar } from "../navbar";

export const CoreLayout = ({children}) => (
    <div style={{ height: '100%' }}>
        <Navbar />
        {children}
    </div>
)
