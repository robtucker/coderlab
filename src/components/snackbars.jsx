import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const Snackbars = ({snackbars, close}) => {
    //console.log('snackbars', snackbars);
    return (
        <section>
            {snackbars.map((snackbar) => {
                return <Snackbar
                    key={snackbar.id}
                    open={snackbar.open}
                    action={snackbar.action}
                    onActionTouchTap={() => close(snackbar.id)}
                    onRequestClose={() => close(snackbar.id)}
                    message={snackbar.message}
                    autoHideDuration={snackbar.duration || 4000}/>    
            })}
        </section>
    );
}

export { Snackbars }
