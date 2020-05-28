import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.profilePage}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     updateNewPostText = {props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>

    )
}
export default Profile
