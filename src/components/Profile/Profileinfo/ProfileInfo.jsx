import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.lending}
                     src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
            </div>
            <div className={classes.description}>
                ava + description
            </div>

        </div>

    )
}
export default ProfileInfo
