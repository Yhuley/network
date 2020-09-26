import React from "react";
import navbar from './Navbar.module.css';

const Navbar = () => {
    return(
            <ul className={navbar.navigation}>
                <li>Profile</li>
                <li>Mesage</li>
                <li>News</li>
                <li>Music</li>
            </ul>
    );
}
export default Navbar;