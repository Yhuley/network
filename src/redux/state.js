let state = {
    profile: {
        postsData: [
            {id: 1, postText: 'new post', likesAmount: 132323, commentsAmount: 12},
            {id: 2, postText: '33lfkfk', likesAmount: 543453, commentsAmount: 876},
            {id: 3, postText: 'sdsd', likesAmount: 22, commentsAmount: 3645676},
            {id: 4, postText: 'sdfdf', likesAmount: 665, commentsAmount: 32},
        ],
    },
    messages: {
        messageData: [
            {id: 1, messageText: 'Hi'},
            {id: 2, messageText: 'Hello'},
        ],
        dialogsListData: [
            {id: 1, name: 'Oksana', lastMessageText: 'Hi, Yurii'},
            {id: 2, name: 'Petro', lastMessageText: 'How are you'},
            {id: 3, name: 'Nazar', lastMessageText: 'i`m fine'},
            {id: 4, name: 'Sofia', lastMessageText: 'HB!'},
            {id: 5, name: 'Roman', lastMessageText: 'Buy'},
        ],
    },
    sidebar: {
        friendsData: [
            {id: 1,name: 'Ava Max'},
        ],
    }
}

export default state;