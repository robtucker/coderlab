import React from 'react';
import { Link } from 'react-router';
import MenuItem from "material-ui/MenuItem";


const MenuLink = (props) => {

    return (

        <Link to={props.url} onClick={props.onClick} className="text-decoration-none">
            <MenuItem>{props.title}</MenuItem>
        </Link>

    );
    
};

export { MenuLink }
