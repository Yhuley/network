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

const DialogsList = (props) => {
    return (
        <div className={s.dialogList}>
            <DialogsItem id={dialogsListData[0].id} name={dialogsListData[0].name} lastMessagetext={dialogsListData[0].lastMessageText}/>
            <DialogsItem id={dialogsListData[1].id} name={dialogsListData[1].name} lastMessagetext={dialogsListData[1].lastMessageText}/>
            <DialogsItem id={dialogsListData[2].id} name={dialogsListData[2].name} lastMessagetext={dialogsListData[2].lastMessageText}/>
            <DialogsItem id={dialogsListData[3].id} name={dialogsListData[3].name} lastMessagetext={dialogsListData[3].lastMessageText}/>
            <DialogsItem id={dialogsListData[4].id} name={dialogsListData[4].name} lastMessagetext={dialogsListData[4].lastMessageText}/>
        </div>
    );
}

export default DialogsList;