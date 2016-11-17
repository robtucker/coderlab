import React from 'react';
import { Link } from "react-router";

import { MenuLink } from '../../components/menu-link';

import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

var headerStyle = {
    paddingLeft: "16px",
    textDecoration: "none"
};


const Navbar = (props) => {
    
    if(!props.isVisible) {
        return null;
    }

    // let getNestedItems = (items) => {
    //     if(!items) return null;

    //     let res = [];

    //     items.forEach((item) => {
    //         res.push(
    //             <MenuLink 
    //                 key={item.id} 
    //                 url={item.url} 
    //                 onClick={props.toggleNavbar} 
    //                 label={item.label} 
    //                 nestedItems={getNestedItems(item.nestedItems)}/>
    //         );
    //     })

    //     return res;
    // }

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

            <AppBar onLeftIconButtonTouchTap={props.toggleNavbar} style={{boxShadow: 'none'}}/>
        </section>
    )
    
};

export { Navbar }