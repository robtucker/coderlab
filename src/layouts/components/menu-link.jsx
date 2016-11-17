import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MenuItem from "material-ui/MenuItem";
import {ListItem} from 'material-ui/List';


const MenuLink = ({url, onClick, label}) => {

    return (

        <Link to={url} onClick={onClick} className="text-decoration-none">
            <ListItem primaryText={label} />
        </Link>

    );
    
};

MenuLink.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export { MenuLink }