import React from "react";
import dialog from './Dialog.module.css';
import Message from "./Message/Message.jsx";

const Dialog = (props) => {
    return(
        <div className={dialog.dialog}>
            <Message messageText='1'/>
            <Message messageText='2'/>
        </div>
    );
}

export default Dialog;