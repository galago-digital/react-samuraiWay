import React from 'react';
import classes from './../Navbar.module.css';
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";

const FriendsBar = (props) => {
    let friendData = props.sidebar.friend
        .map(i => <FriendsBarItem key={i.id} img={i.ava}  name={i.name}/>)
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