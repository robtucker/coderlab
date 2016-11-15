import React from 'react';
import { Link } from "react-router";

import { MenuLink } from './menu-link';

import { textColors } from "../../../styles";

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";

var headerStyle = {
    paddingLeft: "16px", 
    borderBottom: `1px solid ${textColors.minBlack}`
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
                <Link className="primary2" onClick={props.toggleNavbar}>
                    <div className="width-100 padding-y-sm font-size-lg" style={headerStyle}>CoderLab</div>
                </Link>
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