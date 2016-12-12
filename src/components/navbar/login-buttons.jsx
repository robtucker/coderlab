import React from 'react';
import { Link } from 'react-router';

const LoginButtons = () => (

    <div className="row height-100 justify-center align-center white font-size-sm">
        <Link to="/register" className="padding-x-xs">SIGN UP</Link>
        <div>|</div>
        <Link to="/login" className="padding-x-xs">LOGIN</Link>
    </div>
    
);

export { LoginButtons }
