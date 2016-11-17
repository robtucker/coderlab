import React from 'react';
import { Link } from "react-router";

import { MenuLink } from './menu-link';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import Divider from 'material-ui/Divider';

var headerStyle = {
    paddingLeft: "16px",
    textDecoration: "none"
};

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
                <Link className="primary2" to="/" onClick={props.toggleNavbar}>
                    <div className="width-100 padding-y-sm font-size-lg" style={headerStyle}>{props.appTitle}</div>
                </Link>
                <Divider />
                {
                    props.navMenu.map((item) => {
                        return <MenuLink key={item.id} url={item.url} onClick={props.toggleNavbar} title={item.title} />
                    })
                }

            </Drawer>

            <AppBar onLeftIconButtonTouchTap={props.toggleNavbar} style={{boxShadow: 'none'}}/>
        </section>
    )
    
};

export { Navbar }