import React from "react";
import posts from './Posts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

const Posts = () => {
    return(
            <div className={posts.posts}>
                <CreatePost/>
                <Post/>
            </div>
    );
}
export default Posts;