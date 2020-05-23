import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return(
        <div className={classes.dialog}>
            <NavLink to = {path}  activeClassName = {classes.activeLink}> {props.name}</NavLink>
        </div>
    )
}
const Message = (props) =>{
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return(
        <div className={classes.dialogPage}>
            <div className={classes.dialogsMenu}>
                <DialogItem name = "Joe" id = "1"/>
                <DialogItem name = "Vick" id = "2"/>
                <DialogItem name = "Mickey" id = "3"/>
            </div>
            <div className={classes.messages}>
                <Message message = "Hello"/>
                <Message message = "Wow"/>
                <Message message = "Props"/>
            </div>
        </div>

    )
}

export default Dialogs;