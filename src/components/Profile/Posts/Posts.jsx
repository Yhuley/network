import React from "react";
import s from './Posts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElement = props.postsData.map(
            post => <Post postText={post.postText} likesAmount={post.likesAmount} commentsAmount={post.commentsAmount}/>);

    return (
        <div className={s.posts}>
            <CreatePost addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        newPostText={props.newPostText}
            />
            {postsElement}
        </div>
    );
}
export default Posts;