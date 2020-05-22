import React from 'react';
import Post from "./Post/Post"
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.postPanel}>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message = "hi? How are you?" likeCount = "15"/>
            <Post message = "My first post" likeCount = "25"/>
        </div>


    )
}
export default MyPosts
