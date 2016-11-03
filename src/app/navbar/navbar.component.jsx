import React from 'react';
import { Link } from 'react-router';

export const Navbar = ({brand, isVisible}) => (
    
    <navbar>
        <Link to="/">CoderLab {brand}</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/courses">Courses</Link>
    </navbar>

);