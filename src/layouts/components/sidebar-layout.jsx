import React,  { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

import { typography, palette } from "../../styles";

const SidebarLayout = ({width, sidebar, children}) => {

    let sidebarStyles = {
        backgroundColor: palette.accent2Color,
        // maxWidth: "300px",
        // marginLeft: "32px"
    }
    
    return (
        <div className="container">
            <div className="col-xs row-lg justify-start align-start">
                <div className="width-100">{children}</div>
                <Paper className="width-100 sidebar padding-x-sm padding-y-lg" style={sidebarStyles}>{sidebar}</Paper>
            </div>
        </div>
    )

}

SidebarLayout.propTypes = {
    
}

export { SidebarLayout }