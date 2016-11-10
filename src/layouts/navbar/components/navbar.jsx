import React from 'react';

import { MenuLink } from './menu-link';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";


const Navbar = (props) => {
    
    if(!props.isVisible) {
        return null;
    }

    return (
        <section>
            <Drawer open={props.sidenavOpen} 
                onRequestChange={props.toggleNavbar} 
                docked={false}
                className="width-100">

                <MenuLink url="/" onClick={props.toggleNavbar} title={props.appTitle} />
                <MenuLink url="/about" onClick={props.toggleNavbar} title="About" />
                <MenuLink url="/courses" onClick={props.toggleNavbar} title="Courses"/>

            </Drawer>

            <AppBar onLeftIconButtonTouchTap={props.toggleNavbar} style={{boxShadow: 'none'}}/>
        </section>
    )
    
};

export { Navbar }