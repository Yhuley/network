const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    postsData: [
        {id: 1, postText: 'new post', likesAmount: 132323, commentsAmount: 12},
        {id: 2, postText: '33lfkfk', likesAmount: 543453, commentsAmount: 876},
        {id: 3, postText: 'sdsd', likesAmount: 22, commentsAmount: 3645676},
        {id: 4, postText: 'sdfdf', likesAmount: 665, commentsAmount: 32},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                postText: state.newPostText,
                likesAmount: 0,
                commentsAmount: 0
            }

            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer