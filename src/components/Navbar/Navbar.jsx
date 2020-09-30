import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navigation}>
            <nav>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                <NavLink to="/messages" activeClassName={s.activeLink}>Mesages</NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </nav>
        </div>
    );
}
export default Navbar;