import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
class MyPostsC extends React.Component{
    constructor(props) {
        super(props);
    }
    postsElement = this.props.posts
        .map(p => <Post message={p.message} key={p.id} likeCount={p.likesCount}/>);
    newPostElement = React.createRef();

    onAddPost = () => {
        debugger
        this.props.addPost();
    }
    onPostChange = () => {
        this.text = this.newPostElement.current.value;
        this.props.updateNewPostText(this.text)
    }
    render() {
        return (
            <div className={classes.postPanel}>
                <h3>My posts</h3>
                <div>
                    <div>
                    <textarea className={classes.posttext}
                              ref={this.newPostElement}
                              onChange={this.onPostChange}
                              placeholder="Input text"
                              value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={this.onAddPost}
                                className={classes.addPostButton}>Add post
                        </button>
                    </div>
                </div>
                <div className={classes.post}>
                    {this.postsElement}
                </div>
            </div>
        )
    }
}


export default MyPostsC
