import React from "react";
import messages from './Messages.module.css'
import DialogsList from "./DialogsList/DialogsList.jsx";
import Dialog from "./Dialog/Dialog";

const Messages = (props) => {
    return (
        <div className={messages.messages}>
            <DialogsList/>
            <Dialog/>
        </div>
    );
}

export default Messages;