import React from "react";
import s from './PersonalInfo.module.css';
import Photo from "./Photo/Photo.jsx";
import Bio from "./Bio/Bio.jsx";

const PersonalInfo = (props) => {
    return(
        <div className={s.personalInfo}>
            <Photo/>
            <Bio/>
        </div>
    );
}
export default PersonalInfo;