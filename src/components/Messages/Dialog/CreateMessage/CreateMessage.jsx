import React from 'react';
import s from './CreateMessage.module.css';

const CreateMessage = (props) => {
    const NewMessageText = React.createRef()

    const sendMessage = () => {
        props.sendMeassage()
    }

    const updateNewMessageText = () => {
        const text = NewMessageText.current.value
        props.updateNewMessageText(text)
    }

    return(
        <form className={s.messageCreate}>
            <img
                src='data:image/jpeg;base64,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'/>
            <textarea ref={NewMessageText} onChange={updateNewMessageText} value={props.newMessageText}/>
            <button type={"button"} onClick={sendMessage}>Send</button>
        </form>
    );
}

export default CreateMessage;
