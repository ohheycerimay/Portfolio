import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <NavLink
            className="navlink"to="/home">Home</NavLink>
            <NavLink
            className="navlink"to="/about">About</NavLink>
            <NavLink
            className="navlink"to="/projects">Portfolio</NavLink>
            <NavLink
            className="navlink"to="/contact">Contact</NavLink>
        </div>
    );
}

export default NavBar;