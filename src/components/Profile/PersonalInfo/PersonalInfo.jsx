import React from "react";
import personalInfo from './PersonalInfo.module.css';
import Photo from "./Photo/Photo.jsx";
import Bio from "./Bio/Bio.jsx";

const PersonalInfo = () => {
    return(
        <div className={personalInfo.personalInfo}>
            <Photo/>
            <Bio/>
        </div>
    );
}
export default PersonalInfo;