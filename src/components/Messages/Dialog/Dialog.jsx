import React from "react";
import s from './Dialog.module.css';
import Message from "./Message/Message.jsx";
import CreateMessage from './CreateMessage/CreateMessage.jsx';

const Dialog = (props) => {

    let dialogElements =
        props.messageData.map(message => <Message messageText={message.messageText}/>)

    return (
        <div className={s.dialog}>
            <CreateMessage dispatch={props.dispatch}
                           newMessageText={props.newMessageText}
            />
            {dialogElements}
        </div>
    );
}

export default Dialog;