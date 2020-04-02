import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (
        <div>
            MyPost
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
               <Post name='Albert' message='Hi, my friend' likesCount='5'/>
               <Post name='Albert' message='Good By, my girlfriend' likesCount='27'/>
            </div>
        </div>
    );
}

export default MyPosts;