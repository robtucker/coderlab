import React from 'react';
import { Link } from "react-router";

import { MenuLink } from '../elements/menu-link';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { UserMenu } from "./user-menu";
import { LoginButtons } from "./login-buttons";

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
                <List>
                    {
                        props.navMenu.map((item) => {
                            return <MenuLink 
                                key={item.id} 
                                url={item.url} 
                                onClick={props.toggleNavbar} 
                                label={item.label} />
                        })
                    }     
                </List>
            </Drawer>

            <div className="row justify-start align-center" style={{height: '56px', backgroundColor: props.backgroundColor}}>
                <div className="padding-x-sm cursor-pointer" onTouchTap={props.toggleNavbar}>
                    <i className="material-icons menu white">menu</i>
                </div>
                <div className="padding-x-sm cursor-pointer" style={{marginLeft: 'auto'}}>
                    {props.isLoggedIn ? <UserMenu logout={props.logout} /> : <LoginButtons /> }
                </div>
            </div>
                
        </section>
    )
    
};

export { Navbar }
