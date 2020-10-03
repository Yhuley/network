import React from "react";
import s from './Dialog.module.css';
import Message from "./Message/Message.jsx";

const Dialog = (props) => {

    let dialogElemnts =
        props.messageData.map( message => <Message messageText={message.messageText}/>)

    return(
        <div className={s.dialog}>
            {dialogElemnts}
        </div>
    );
}

export default Dialog;