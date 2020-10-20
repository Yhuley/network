import React from "react";
import s from './Sidebar.module.css';
import Friends from "./Friends/Friends.jsx";
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
   /* let friendsElement =
        props.friendsData.map(
            friend => <Friends name={friend.name}/>);
*/
    return (
        <div className={s.navigation}>
            <nav>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                <NavLink to="/messages" activeClassName={s.activeLink}>Mesages</NavLink>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </nav>
            {/*{friendsElement}*/}
        </div>
    );
}
export default Sidebar;