import React from "react";
import dialogsList from './DialogsList.module.css';
import DialogInfo from './DialogInfo/DialogInfo.jsx';

const DialogsList = (props) => {
    return (
        <div className={dialogsList.dialogList}>
            <DialogInfo lastMessageText='jmhgfdsfghjgftdr'/>
            <DialogInfo lastMessageText='jmhgfdsfghjgftdr'/>
            <DialogInfo lastMessageText='jmhgfdsfghjgftdr'/>
            <DialogInfo lastMessageText='jmhgfdsfghjgftdr'/>
            <DialogInfo lastMessageText='jmhgghngfdfghgfghbnmfgvfdsfdsdfdef fdsfghjgftdr'/>
        </div>
    );
}

export default DialogsList;