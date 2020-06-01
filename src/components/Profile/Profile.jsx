import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profilePage}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    )
}
export default Profile
