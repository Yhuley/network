import React from "react";
import s from './Friends.module.css';

const Friends = (props) => {
    return(
        <div className={s.friends}>
            <label>FRIENDS</label>
            <div>
                <img src='https://lastfm.freetls.fastly.net/i/u/770x0/488f54a23f117b517cfbe769ff55a413.jpg'/>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

export default Friends;