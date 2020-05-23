import React from 'react';
import Post from "./Post/Post"
import classes from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div className={classes.postPanel}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.post}>
                <Post message="hi? How are you?" likeCount="15"/>
                <Post message="My first post" likeCount="25"/>
            </div>
        </div>


    )
}
export default MyPosts
