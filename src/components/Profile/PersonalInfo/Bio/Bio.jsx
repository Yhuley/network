import React from "react";
import bio from './Bio.module.css';

const Bio = (props) => {
    return(
        <div className={bio.bio}>
            <label className={bio.bioName}>Profile name</label>
            <div className={bio.bioList}>
                <ul>
                    <li>Date of birth:</li>
                    <li>Hometown:</li>
                    <li>Martial status:</li>
                </ul>
                <ul>
                    <li>10 october 1984</li>
                    <li>Lviv</li>
                    <li>single</li>
                </ul>
            </div>
        </div>
    );
}
export default Bio;