import React, { Component, PropTypes } from "react";
import { Link, browserHistory } from "react-router";
import Drawer from "material-ui/Drawer";
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';

let drawerHeaderStyles = {
    paddingLeft: "16px",
    textDecoration: "none"
};

export class ChallengeNavigation extends Component {

    render() {
        return (
            <Drawer open={this.props.sidebarVisible} 
                onRequestChange={this.props.toggleNavigationDrawer} 
                docked={false}
                className="width-100"> 
                <Link className="primary2" to="/" onClick={this.props.toggleNavigationDrawer}>
                    <div className="width-100 padding-y-sm font-size-lg" style={drawerHeaderStyles}>
                        {this.props.course.title}
                    </div>
                </Link>
                <Divider />
                <List>
                    {
                        // this.props.course.levels.map((item) => {
                        //     return <MenuLink 
                        //         key={item.id} 
                        //         onTouchTap={props.toggleNavigationDrawer} 
                        //         label={item.title} />
                        // })
                    }     
                </List>
            </Drawer>
        );
    }
}