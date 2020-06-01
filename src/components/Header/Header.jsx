import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="/img/LogoFly.png"/>
            <p className={classes.brandName}><span className={classes.firstName}>Bird</span><span
                className={classes.lastName}>Travel</span></p>
        </header>
    )
}
export default Header