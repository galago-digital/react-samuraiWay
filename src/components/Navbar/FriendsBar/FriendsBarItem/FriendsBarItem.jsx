import React from 'react';
import classes from "./../../Navbar.module.css"



const FriendsBarItem = (props) => {

    return (
        <div className={classes.friendsCard}>
            <img src={props.img}/>
            <span>{props.name}</span>
        </div>
    )
}

export default FriendsBarItem