import React from "react";
import navbar from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={navbar.navigation}>
            <nav>
                <NavLink to="/profile" activeClassName={navbar.activeLink}>Profile</NavLink>
                <NavLink to="/messages" activeClassName={navbar.activeLink}>Mesages</NavLink>
                <NavLink to="/news" activeClassName={navbar.activeLink}>News</NavLink>
                <NavLink to="/music" activeClassName={navbar.activeLink}>Music</NavLink>
                <NavLink to="/settings" activeClassName={navbar.activeLink}>Settings</NavLink>
            </nav>
        </div>
    );
}
export default Navbar;