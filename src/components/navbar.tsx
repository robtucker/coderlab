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
    
    getDesktop() {

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
                        {this.getLogin()}
                    </div>
                </section>
            </section>
        )
    }

    /**
     * This is not the same as mobile - this is actually a minimized state
     * that is used to increase screen size during the challenges
     */
    getMinimizedNavbar() {
        let minimizedStyles = {
            height: `${AppTheme.appBar.minimizedHeight}px`,
            backgroundColor: this.props.backgroundColor,
        }
        return <div style={minimizedStyles} onTouchTap={this.props.toggleNavbar}/>
    }

    /**
     * regular mobile nav
     */
    getMobile() {

        let expanded = null;
        let color = {backgroundColor: this.props.backgroundColor};
        let height = {height: AppTheme.appBar.height};
        // same amount of padding goes underneath the expanded section to balance it out
        let lowerPadding = {paddingBottom: `${(AppTheme.appBar.height - 24) / 2}px`};

        if(this.props.mobileNavbarVisible) {
            expanded = (
                <div className="col white width-100 padding-x-lg" style={lowerPadding}>
                    {
                        this.props.navMenu.map((item) => {
                            return <Link 
                                className={`width-100 padding-y-xs cursor-pointer ${item.className}`}
                                key={item.id} 
                                onTouchTap={this.props.toggleMobile} 
                                to={item.url}>{item.label}</Link>
                        })
                    }  
                </div> 
            );
        }

        return (  
            <section style={color}>      
                <section style={height} className="padding-x-lg">
                    <div className="row height-100 width-100 justify-start align-center">
                        {this.getHamburger()} 
                        {this.getLogin()}
                    </div>
                </section>
                {expanded}
            </section>
        );

    }

    getHamburger() {
        return <i onTouchTap={this.props.toggleMobile} className="material-icons white cursor-pointer">menu</i>
    }

    getLogin() {
        return (
            <div className="cursor-pointer" style={{marginLeft: 'auto'}}>
                {this.props.isLoggedIn ? <UserMenu logout={this.props.logout} /> : <LoginButtons /> }
            </div>
        )
    }


    render() {
        if(!this.props.navbarVisible) {
            return this.getMinimizedNavbar();
        }
        
        if(this.props.isMobile) {
            return this.getMobile();
        }

        return this.getDesktop()
    }
  
};


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

// DEPRACATED - the app level sidedrawer was ditched in favour of a sidedrawer for each course
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