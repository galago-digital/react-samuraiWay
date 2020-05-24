import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeLink}> {props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Joe"},
        {id: 2, name: "Vick"},
        {id: 3, name: "Mickey"},
        {id: 4, name: "Nick"}
    ];
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "My"},
        {id: 3, message: "Pony"},
        {id: 4, message: "Amazing"}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogsMenu}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>

    )
}

export default Dialogs;