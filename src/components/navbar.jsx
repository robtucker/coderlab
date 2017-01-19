import React, {Component} from 'react';
import { Link } from "react-router";
import Divider from 'material-ui/Divider';
import Drawer from "material-ui/Drawer";
import { List } from 'material-ui/List';
import { MenuLink } from './menu-link';
import AppBar from "material-ui/AppBar";
import { UserMenu } from "./user-menu";
import { LoginButtons } from "./login-buttons";
import { AppTheme } from "../styles";

let drawerHeaderStyles = {
    paddingLeft: "16px",
    textDecoration: "none"
};

export class Navbar extends Component {
    
    componentWillMount() {
        // console.log('mounting navbar');
        // console.log(this.props);
    }
    
    getMinimizedNavbar() {
        let minimizedStyles = {
            height: `${AppTheme.appBar.minimizedHeight}px`,
            backgroundColor: this.props.backgroundColor,
        }

        // let toggleButton = {
        //     position: 'absolute',
        //     zIndex: 100,
        //     padding: '5px 3px 3px 3px',
        //     top: '0px',
        //     left: '60px',
        //     borderRadius: '3px',
        //     backgroundColor: this.props.backgroundColor,
        // }

        // return (
        //     <div style={minimizedStyles}>
        //         <i  
        //             style={toggleButton}
        //             className="material-icons white">
        //             arrow_downward
        //         </i>
        //     </div>
        // )
        return <div style={minimizedStyles} onTouchTap={this.props.toggleNavbar}/>
    }

    // getSidedrawer() {
    //     return (
    //         <Drawer open={this.props.sidebarVisible} 
    //             onRequestChange={this.props.toggleSidebar} 
    //             docked={false}
    //             className="width-100"> 
    //             <Link className="primary2" to="/" onClick={this.props.toggleSidebar}>
    //                 <div className="width-100 padding-y-sm font-size-lg" style={drawerHeaderStyles}>
    //                     {this.props.appTitle}
    //                 </div>
    //             </Link>
    //             <Divider />
    //             <List>
    //                 {
    //                     this.props.navMenu.map((item) => {
    //                         return <MenuLink 
    //                             key={item.id} 
    //                             url={item.url} 
    //                             onTouchTap={this.props.toggleSidebar} 
    //                             label={item.label} />
    //                     })
    //                 }     
    //             </List>
    //         </Drawer>
    //     );
    // }

    getHamburger() {
        return <i onTouchTap={this.props.toggleSidebar} className="material-icons white hidden-md-up">menu</i>
    }

    render() {
        if(!this.props.navbarVisible) {
            return this.getMinimizedNavbar();
        }
        
        let navbarStyles = {
            height: AppTheme.appBar.height, 
            backgroundColor: this.props.backgroundColor,
        };
        
        return (
            <section>
                <section className="padding-x-lg" style={navbarStyles}>
                    <div className="row justify-start align-center white height-100">
                        {
                            this.props.navMenu.map((item) => {
                                return <Link 
                                    className={`margin-right-md cursor-pointer ${item.className}`}
                                    key={item.id} 
                                    to={item.url}>{item.label}</Link>
                            })
                        }   
                        <div className="cursor-pointer" style={{marginLeft: 'auto'}}>
                            {this.props.isLoggedIn ? <UserMenu logout={this.props.logout} /> : <LoginButtons /> }
                        </div>
                    </div>
                </section>
            </section>
        )
    }
    
};

