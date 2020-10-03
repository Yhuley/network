import React from "react";
import s from './Messages.module.css'
import DialogsList from "./DialogsList/DialogsList.jsx";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <DialogsList dialogsListData={props.dialogsListData}/>
            <Dialog messageData={props.messageData}/>
        </div>
    );
}

export default Messages;