import React from "react";
import s from './Posts.module.css';
import Post from "./Post/Post";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Posts = (props) => {

    const postsElement = props.store.getState().profile.postsData.map(
            post => <Post postText={post.postText} likesAmount={post.likesAmount} commentsAmount={post.commentsAmount}/>);

    return (
        <div className={s.posts}>
            <CreatePostContainer store={props.store}/>
            {postsElement}
        </div>
    );
}
export default Posts;