import React from "react";
import profile from './Profile.module.css';
import Posts from "./Posts/Posts";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Gallery from "./Gallery/Gallery";
import Header from './Header/Header';

const Profile = (props) => {
    return (
        <div className={profile.profile}>
            <Header/>
            <PersonalInfo/>
            <Gallery/>
            <Posts/>
        </div>
    );
}
export default Profile;