import React from "react";
import s from './Posts.module.css';
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";

let postsData = [
    {id: 1, postText: 'new post', likesAmount: 132323, commentsAmount: 12},
    {id: 2, postText: 'sdf', likesAmount: 543453, commentsAmount: 876},
    {id: 3, postText: 'sdsd', likesAmount: 22, commentsAmount: 3645676},
    {id: 4, postText: 'sdfdf', likesAmount: 665, commentsAmount: 32},
]

let postsElement = postsData
    .map(post =>  <Post postText={post.postText} likesAmount={post.likesAmount} commentsAmount={post.commentsAmount}/>);

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <CreatePost/>
            {postsElement}
        </div>
    );
}
export default Posts;