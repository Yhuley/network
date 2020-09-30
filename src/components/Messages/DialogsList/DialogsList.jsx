import React from "react";
import s from './DialogsList.module.css';
import DialogsItem from './DialogsItem/DialogsItem.jsx';

let dialogsListData = [
    {id: 1, name: 'Oksana', lastMessageText: 'Hi, Yurii'},
    {id: 2, name: 'Petro', lastMessageText: 'How are you'},
    {id: 3, name: 'Nazar', lastMessageText: 'i`m fine'},
    {id: 4, name: 'Sofia', lastMessageText: 'HB!'},
    {id: 5, name: 'Roman', lastMessageText: 'Buy'},
]

let dialogsListElements = dialogsListData
    .map(dialog => <DialogsItem id={dialog.id} name={dialog.name} lastMessagetext={dialog.lastMessageText}/>);

const DialogsList = (props) => {
    return (
        <div className={s.dialogList}>
            {dialogsListElements}
        </div>
    );
}

export default DialogsList;