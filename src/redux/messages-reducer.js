const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                messageText: state.newMessageText
            }

            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default messagesReducer