import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import MenuItem from "material-ui/MenuItem";
import {ListItem} from 'material-ui/List';


const MenuLink = ({url, onTouchTap, label}) => (

    <Link to={url} onTouchTap={onTouchTap}>
        <ListItem primaryText={label} />
    </Link>

);


MenuLink.propTypes = {
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export { MenuLink }
