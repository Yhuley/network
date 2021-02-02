import React from "react";
import s from './Messages.module.css'
import DialogsList from "./DialogsList/DialogsList.jsx";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <DialogsList dialogsListData={props.store.getState().messages.dialogsListData}/>
            <Dialog store={props.store}/>
        </div>
    );
}

export default Messages;