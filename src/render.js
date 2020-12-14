import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state.js";
import {BrowserRouter} from "react-router-dom";

export const reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     sendMessage={sendMessage}
                     updateNewMessageText={updateNewMessageText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}