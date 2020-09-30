import React from "react";
import s from './Dialog.module.css';
import Message from "./Message/Message.jsx";

let messageData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
]

let dialogElemnts = messageData
    .map( message => <Message messageText={message.messageText}/>)

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            {dialogElemnts}
        </div>
    );
}

export default Dialog;