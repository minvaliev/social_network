import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

let posts = [
    {id: 1, message: 'Hi, my friend', likesCount: 5},
    {id: 2, message: 'Good By, my girlfriend', likesCount: 27},
    {id: 3, message: 'Good By, my girlfriend', likesCount: 27},
    {id: 4, message: 'GGFFGDG', likesCount: 27},
    {id: 5, message: 'DGGDRRR', likesCount: 27},
    {id: 6, message: 'dgcdfd', likesCount: 27},
]

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;