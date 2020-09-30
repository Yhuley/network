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

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <CreatePost/>
            <Post postText={postsData[0].postText} likesAmount={postsData[0].likesAmount} commentsAmount={postsData[0].commentsAmount}/>
            <Post postText={postsData[1].postText} likesAmount={postsData[1].likesAmount} commentsAmount={postsData[1].commentsAmount}/>
            <Post postText={postsData[2].postText} likesAmount={postsData[2].likesAmount} commentsAmount={postsData[2].commentsAmount}/>
            <Post postText={postsData[3].postText} likesAmount={postsData[3].likesAmount} commentsAmount={postsData[3].commentsAmount}/>
        </div>
    );
}
export default Posts;