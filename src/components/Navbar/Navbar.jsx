import React from "react";
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={navbar.navigation}>
            <nav>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/messages">Mesages</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </nav>
        </div>
    );
}
export default Navbar;