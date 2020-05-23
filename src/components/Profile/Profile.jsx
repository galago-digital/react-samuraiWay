import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.lending} src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" />
            </div>
            <div>
                ava + description
        </div>
            <MyPosts/>
        </div>

    )
}
export default Profile
