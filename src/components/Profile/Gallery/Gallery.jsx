import React from "react";
import s from './Gallery.module.css';

const Gallery = (props) => {
    return(
        <div className={s.gallery}>
            <img src='https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'/>
            <img src='https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'/>
            <img src='https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'/>
            <img src='https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg'/>
        </div>
    );
}
export default Gallery;