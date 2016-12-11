import React from 'react';

const LoginButtons = ({handleClick}) => (
    <div className="row height-100 justify-center align-center white font-size-sm">
        <div className="padding-x-xs" onTouchTap={() => {handleClick('register')}}>SIGN UP</div>
        <div>|</div>
        <div className="padding-x-xs" onTouchTap={() => {handleClick('login')}}>LOGIN</div>
    </div>
);

export { LoginButtons }
