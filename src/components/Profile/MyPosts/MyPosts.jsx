import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount}/>);
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
