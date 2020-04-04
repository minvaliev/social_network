import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

let postData = [
    {id: 1, message: 'Hi, my friend', likesCount: 5},
    {id: 2, message: 'Good By, my girlfriend', likesCount: 27},
]

const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            <h3>MyPost</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
               <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
               <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;