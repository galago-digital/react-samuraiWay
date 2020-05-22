import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className = {classes.lending} src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" />
            </div>
            <div>
                ava + description
        </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    posts
                </div>
            </div>
        </div>

    )
}
export default Profile
