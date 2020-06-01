import React from 'react';
import classes from './../Navbar.module.css';
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";

const FriendsBar = (props) => {
    let state = props.sidebar;
    let friendData = state.friend
        .map(i => <FriendsBarItem img={i.ava} name={i.name}/>)
    return (
        <div className={`${classes.item} ${classes.friends}`}>
            Friends:
            <div>
                {friendData}
            </div>
        </div>
    )
}

export default FriendsBar