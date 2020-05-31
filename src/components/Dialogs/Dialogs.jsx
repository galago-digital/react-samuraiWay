import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messages
        .map(m => <Message message={m.message}/>);

let addMessage = () => {
    props.dispatch(addMessageCreator())
}
let onMessageChange = (e) =>{
    let text = e.target.value
    props.dispatch(updateNewMessageCreator(text))
}

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogsMenu}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div className={classes.messageSendBar}>
                    <textarea onChange={onMessageChange}
                              className={classes.messageText}
                              value={props.newMessageText}
                              placeholder="Input text"/>
                    <div>
                        <button
                            onClick={addMessage}
                            className={classes.sendMessageButton}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;