import React from "react";
import s from './Dialog.module.css';
import Message from "./Message/Message.jsx";
import CreateMessageContainer from "./CreateMessage/CreateMessageContainer";

const Dialog = (props) => {

    const dialogElements =
        props.store.getState().messages.messageData.map(message => <Message messageText={message.messageText}/>)

    return (
        <div className={s.dialog}>
            <CreateMessageContainer store={props.store}/>
            {dialogElements}
        </div>
    );
}

export default Dialog;