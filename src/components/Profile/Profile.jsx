import React from "react";
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Gallery from "./Gallery/Gallery";
import Header from './Header/Header';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <Header/>
            <PersonalInfo/>
            <Gallery/>
            <Posts/>
        </div>
    );
}
export default Profile;