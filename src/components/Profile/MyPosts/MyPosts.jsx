import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let postsElement = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    //обработка событий
    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }
    return (
        <div className={classes.postPanel}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={classes.posttext}
                              ref={newPostElement}
                              onChange={onPostChange}
                              placeholder="Input text"
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }
                            className={classes.addPostButton}>Add post</button>
                </div>
            </div>
            <div className={classes.post}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts
