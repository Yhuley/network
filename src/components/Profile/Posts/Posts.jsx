import React from "react";
import posts from './Posts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={posts.posts}>
            <CreatePost/>
            <Post text='Yurii' likesAmount='5098909878'
                  commentsAmount='222'/>
            <Post text='Tomas' likesAmount='0' commentsAmount='0'/>
        </div>
    );
}
export default Posts;