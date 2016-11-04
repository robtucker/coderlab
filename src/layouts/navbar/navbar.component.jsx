import React from 'react';
import { Link } from 'react-router';

export const Navbar = ({title, isVisible}) => {
    
    if(!isVisible) {
        return null;
    }

    return (
        <navbar>
            <Link to="/">{title}</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/courses">Courses</Link>
        </navbar>
    )
    
};
