import React from "react";
import header from './Header.module.css'

const Header = () => {
    return(
        <header className={header.header}>
            <img className={header.logo} src='https://www.shareicon.net/data/256x256/2017/02/24/879397_network_512x512.png'/>
            <a className={header.logOut}>log out</a>
        </header>
    );
}

export default Header;