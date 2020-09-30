import React from "react";
import s from './Dialog.module.css';
import Message from "./Message/Message.jsx";

let messageData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
]

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            <Message messageText={messageData[0].messageText}/>
            <Message messageText={messageData[1].messageText}/>
        </div>
    );
}

export default Dialog;