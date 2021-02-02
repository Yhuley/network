import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import CreatePost from "./CreatePost";

const CreatePostContainer = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return <CreatePost addPost={addPost} updateNewPostText={onPostChange} newPostText={state.profile.newPostText}/>
}

export default CreatePostContainer;