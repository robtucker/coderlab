import React from 'react';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const UserMenu = ({logout}) => {
    //console.log('user menu', logout);
    return (
        <IconMenu
            iconStyle={{color: 'white'}}
            iconButtonElement={<IconButton style={{padding: '0px', width: '16px'}} ><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <Link to="/settings"><MenuItem primaryText="Settings"/></Link>
            <MenuItem primaryText="Sign out" onTouchTap={logout} />
        </IconMenu>
    );
}

export { UserMenu }