import React from "react";
import s from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';

const DialogsList = (props) => {
     
    let dialogsListElements =
        props.dialogsListData.map(dialog => <DialogsItem id={dialog.id} name={dialog.name}
                                                         lastMessagetext={dialog.lastMessageText}/>);

    return (
        <div className={s.dialogList}>
            {dialogsListElements}
        </div>
    );
}

export default DialogsList;