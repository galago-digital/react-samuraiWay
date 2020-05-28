import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = props.state.messages
        .map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage =  () =>{
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogsMenu}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div className={classes.messageSendBar}>
                    <textarea ref = {newMessageElement} className={classes.messageText} placeholder="Input text"></textarea>
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