import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            {props.message}
            <div>
                <span>{props.likeCount} Like</span>
            </div>
        </div>
    )
}
export default Post
