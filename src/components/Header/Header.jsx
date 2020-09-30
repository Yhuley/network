import React from "react";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src='https://www.shareicon.net/data/256x256/2017/02/24/879397_network_512x512.png'/>
            <a className={s.logOut}>log out</a>
        </header>
    );
}

export default Header;