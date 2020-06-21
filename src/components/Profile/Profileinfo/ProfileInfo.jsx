import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={classes.lending}
                     src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
            </div>
            <div className={classes.description}>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                {props.profile.fullName}
            </div>

        </div>

    )
}
export default ProfileInfo
