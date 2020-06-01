import React from 'react';
import classes from './../Navbar.module.css';
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem";
import FriendsBar from "./FriendsBar";
import StoreContext from "../../../StoreContext";

const FriendsBarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().sidebar
                return (
                    <FriendsBar sidebar={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default FriendsBarContainer;