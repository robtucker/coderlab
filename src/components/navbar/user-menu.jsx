import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const UserMenu = ({logout}) => {
    //console.log('user menu', logout);
    return (
        <IconMenu
            iconStyle={{color: 'white'}}
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Sign out" onTouchTap={logout} />
        </IconMenu>
    );
}

export { UserMenu }