import React, { Component, PropTypes } from "react";
import { Link, browserHistory } from "react-router";
import Drawer from "material-ui/Drawer";
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';
import {MenuLink} from "../../../components/menu-link";

let drawerHeaderStyles = {
    paddingLeft: "16px",
    textDecoration: "none"
};

export class ChallengeNavigation extends Component {

    getLinks() {
        let links = [];
        for(var i = 0; i < this.props.course.levels.length; i++) {
            let l = this.props.course.levels[i];
            let link = `courses/${this.props.course.slug}/level/${i + 1}/1`;
            links.push((<MenuLink 
                key={i} 
                url={link}
                onTouchTap={() => {
                    browserHistory.push(link);
                    this.props.toggleNavigationDrawer();
                    this.props.getChallenge(i + 1, 1);
                }} 
                label={l.title} />));
        }
        return links;
    }
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
                <List>{this.getLinks()}</List>
            </Drawer>
        );
    }
}