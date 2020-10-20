import React from "react";
import s from './Messages.module.css'
import DialogsList from "./DialogsList/DialogsList.jsx";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <DialogsList dialogsListData={props.state.dialogsListData}/>
            <Dialog messageData={props.state.messageData}/>
        </div>
    );
}

export default Messages;