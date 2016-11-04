import React from 'react';
import { Link } from 'react-router';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";

export const Navbar = (props) => {
    
    if(!props.isVisible) {
        return null;
    }

    console.log(props);

    return (
        <section>
            <Drawer open={props.sidenavOpen} 
                onRequestChange={props.toggleNavbar} 
                docked={false}>
            foo
            </Drawer>
            <AppBar onLeftIconButtonTouchTap={props.toggleNavbar}>
                <Link to="/">{props.title}</Link><br/>
                <Link to="/about">About</Link><br/>
                <Link to="/courses">Courses</Link>
            </AppBar>
        </section>
    )
    
};
