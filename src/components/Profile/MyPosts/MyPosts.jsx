import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import Element from "../../Common/FormsControl/FormControl";

const maxLength10 = maxLengthCreator(10)
const TextArea = Element("textarea")
const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'myPostText'} className={classes.posttext} placeholder="Input text" validate ={[required, maxLength10 ]} />
            </div>
            <div>
                <button className={classes.addPostButton}>Add post</button>
            </div>
        </form>
    )
}
const MyPostFormRedux = reduxForm({form: 'myPostAddMessageForm'})(MyPostForm)
const MyPosts = (props) => {
    let postsElement = props.posts
        .map(p => <Post message={p.message} key={p.id} likeCount={p.likesCount}/>);
    let onAddPost = (values) => {
        props.addPost(values.myPostText);
    }
    return (
        <div className={classes.postPanel}>
            <h3>My posts</h3>
            <MyPostFormRedux onSubmit={onAddPost} />
            <div className={classes.post}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts
