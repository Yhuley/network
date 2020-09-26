import React from "react";
import header from './Header.module.css';

const Header = (props) => {
    return(
        <div className={header.header}>
            <label className={header.headerName}>Profile Name</label>
            <span className={header.headerStatus}>online</span>
        </div>
    );
}
export default Header;