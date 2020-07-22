import preloader from "../../../assets/images/bars.svg";
import React from "react";
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={classes.bgFon}>
            <img src={preloader} className={classes.preloader}/>
        </div>
    )
}

export default Preloader