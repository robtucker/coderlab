import React from 'react';
import { Link } from "react-router";

import { MenuLink } from '../components/menu-link';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { UserMenu } from "./user-menu";
import { LoginButtons } from "./login-buttons";
import { AuthDialog } from "../components/auth-dialog";

var headerStyle = {
    paddingLeft: "16px",
    textDecoration: "none"
};

const Navbar = (props) => {
    
    console.log(props);
    
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

            <div className="row justify-start align-center bg-primary" style={{height: '50px'}}>
                <div className="padding-x-sm cursor-pointer" onTouchTap={props.toggleNavbar}>
                    <i className="material-icons menu white">menu</i>
                </div>
                <div className="padding-x-sm cursor-pointer" style={{marginLeft: 'auto'}}>
                    <LoginButtons handleClick={(authType) => { props.setAuthDialogType(authType); props.toggleAuthDialog() }}/>
                </div>
            </div>
            
            <AuthDialog 
                dialogType={props.authDialogType}
                setDialogType={props.setAuthDialogType} 
                handleClose={props.toggleAuthDialog} 
                isOpen={props.authDialogOpen} />
                
        </section>
    )
    
};

export { Navbar }
