import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";
import FriendsBarContainer from "./FriendsBar/FriendsBarContainer";
//навбар, принимающий пропсы, рендерит страницы по ссылкам
const Navbar = (props) => {

    return (
        <nav className={classes.navbar}>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialog" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <FriendsBarContainer/>
        </nav>
    )
}

export default Navbar