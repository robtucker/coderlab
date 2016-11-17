import React,  { PropTypes } from 'react';

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
                <div className="width-100 sidebar" style={sidebarStyles}>{sidebar}</div>
            </div>
        </div>
    )

}

SidebarLayout.propTypes = {
    
}

export { SidebarLayout }