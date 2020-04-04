import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://peopletalk.ru/files/articles/6/5253/s5_8dad37e82e74f542e022285ff451078f.jpg" alt=""/>
            {props.message};
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;