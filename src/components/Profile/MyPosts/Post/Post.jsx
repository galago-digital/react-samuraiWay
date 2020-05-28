import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.postBar}>
            <div className={classes.postCard}>
                <div>
                    {props.message}
                </div>
                <div className={classes.messageOptions}>
                    <span>{props.likeCount} Like</span>
                </div>
            </div>
        </div>
    )
}
export default Post
