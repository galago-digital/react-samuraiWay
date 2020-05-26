import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = props.state.messages
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