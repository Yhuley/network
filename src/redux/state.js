import {reRenderEntireTree} from "../render";

let state = {
    profile: {
        postsData: [
            {id: 1, postText: 'new post', likesAmount: 132323, commentsAmount: 12},
            {id: 2, postText: '33lfkfk', likesAmount: 543453, commentsAmount: 876},
            {id: 3, postText: 'sdsd', likesAmount: 22, commentsAmount: 3645676},
            {id: 4, postText: 'sdfdf', likesAmount: 665, commentsAmount: 32},
        ],
        newPostText: ''
    },

    messages: {
        messageData: [
            {id: 1, messageText: '1'},
            {id: 2, messageText: '2'},
            {id: 3, messageText: '3'},
        ],
        dialogsListData: [
            {id: 1, name: 'Oksana', lastMessageText: 'Hi, Yurii'},
            {id: 2, name: 'Petro', lastMessageText: 'How are you'},
            {id: 3, name: 'Nazar', lastMessageText: 'i`m fine'},
            {id: 4, name: 'Sofia', lastMessageText: 'HB!'},
            {id: 5, name: 'Roman', lastMessageText: 'Buy'},
        ],
        newMessageText: ''
    },

    sidebar: {
        friendsData: [
            {id: 1,name: 'Ava Max'},
        ],
    }
}
window.state = state

export const addPost = () => {
    const newPost = {
        id: 5,
        postText: state.profile.newPostText,
        likesAmount: 0,
        commentsAmount: 0
    }

    state.profile.postsData.push(newPost)
    state.profile.newPostText = ''
    reRenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText
    reRenderEntireTree(state)
}

export const sendMessage = () => {
    const newMessage = {
        id: 4,
        messageText: state.messages.newMessageText
    }

    state.messages.messageData.push(newMessage)
    state.messages.newMessageText = ''
    reRenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
    state.messages.newMessageText = newText
    reRenderEntireTree(state)
}

export default state;