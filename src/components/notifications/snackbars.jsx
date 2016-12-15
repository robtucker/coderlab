import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const Snackbars = ({snackbars}) => {
    return (
        <section>
            {snackbars.map((snackbar) => {
                <Snackbar
                    open={snackbar.open}
                    message="Event added to your calendar"
                    autoHideDuration={4000}/>    
            })}
        </section>
    );
}

export { Snackbars }
