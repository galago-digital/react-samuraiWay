import React from 'react';
import Post from "./Post/Post"
import classes from './MyPosts.module.css';


const MyPosts = () => {
    let posts = [
        {id: 1, message: "hi? How are you?", likesCount:15},
        {id: 2, message: "ololololol", likesCount:10},
        {id: 3, message: "norm", likesCount:5},
        {id: 4, message: "chivo", likesCount:2},
    ]

    let postsElement = posts
        .map(p =><Post message={p.message} likeCount={p.likesCount}/>)

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
                {postsElement}
            </div>
        </div>


    )
}
export default MyPosts
