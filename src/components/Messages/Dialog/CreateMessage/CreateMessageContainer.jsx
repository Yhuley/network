import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messages-reducer";
import CreateMessage from "./CreateMessage";

const CreateMessageContainer = (props) => {
    const state = props.store.getState()

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    const updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return <CreateMessage sendMeassage={sendMessage} updateNewMessageText={updateNewMessageText} newMessageText={state.messages.newMessageText}/>;
}

export default CreateMessageContainer;