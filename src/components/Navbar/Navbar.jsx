import React from "react";
import navbar from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={navbar.navigation}>
            <a>Profile</a>
            <a>Messages</a>
            <a>News</a>
            <a>Music</a>
        </nav>
    );
}
export default Navbar;