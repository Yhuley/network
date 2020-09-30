import React from "react";
import s from './Header.module.css';

const Header = (props) => {
    return(
        <div className={s.header}>
            <label className={s.headerName}>Profile Name</label>
            <span className={s.headerStatus}>online</span>
        </div>
    );
}
export default Header;