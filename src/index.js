import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id: 1, postText: 'new post', likesAmount: 132323, commentsAmount: 12},
    {id: 2, postText: 'sdf', likesAmount: 543453, commentsAmount: 876},
    {id: 3, postText: 'sdsd', likesAmount: 22, commentsAmount: 3645676},
    {id: 4, postText: 'sdfdf', likesAmount: 665, commentsAmount: 32},
]

let messageData = [
    {id: 1, messageText: 'Hi'},
    {id: 2, messageText: 'Hello'},
]

let dialogsListData = [
    {id: 1, name: 'Oksana', lastMessageText: 'Hi, Yurii'},
    {id: 2, name: 'Petro', lastMessageText: 'How are you'},
    {id: 3, name: 'Nazar', lastMessageText: 'i`m fine'},
    {id: 4, name: 'Sofia', lastMessageText: 'HB!'},
    {id: 5, name: 'Roman', lastMessageText: 'Buy'},
]

ReactDOM.render(
  <React.StrictMode>
      <App postsData={postsData} messageData={messageData} dialogsListData={dialogsListData}/>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
