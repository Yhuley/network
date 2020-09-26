import React from "react";
import navbar from './Navbar.module.css';

const Navbar = (props) => {
    return(
        <div className={navbar.navigation}>
            <nav>
                <a href="/profile">Profile</a>
                <a href="/messages">Mesages</a>
                <a href="/news">News</a>
                <a href="/music">Music</a>
                <a href="/settings">Settings</a>
            </nav>
        </div>
    );
}
export default Navbar;