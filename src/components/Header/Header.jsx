import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/img/LogoFly.png"/>
            <p className={classes.brandName}><span className={classes.firstName}>Bird</span><span className={classes.lastName}>Travel</span></p>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header