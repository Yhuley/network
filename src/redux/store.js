import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


const store = {
    _state: {
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
                {id: 1, name: 'Ava Max'},
            ],
        }
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messages = messagesReducer(this._state.messages, action)

        this._callSubscriber(this._state)
    }
}

window.store = store
export default store