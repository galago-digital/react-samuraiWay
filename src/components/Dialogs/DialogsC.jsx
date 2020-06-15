import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class DialogsC extends React.Component{
    constructor(props) {
        super(props);
    }
    state = this.props.dialogsPage;
    dialogsElements = this.state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id}  id={d.id}/>);
    messageElement = this.state.messages
        .map(m => <Message message={m.message} key={m.id} />);
    newMessageText = this.state.newMessageText

    addMessage = () => {
        this.props.sendMessage();
    }
    onMessageChange = (e) => {
        let text = e.target.value
        this.props.updateNewMessageCreator(text);
    }
    render() {
        return (
            <div className={classes.dialogPage}>
                <div className={classes.dialogsMenu}>
                    {this.dialogsElements}
                </div>
                <div className={classes.messages}>
                    {this.messageElement}
                    <div className={classes.messageSendBar}>
                    <textarea onChange={this.onMessageChange}
                              className={classes.messageText}
                              value={this.newMessageText}
                              placeholder="Input text"/>
                        <div>
                            <button
                                onClick={this.addMessage}
                                className={classes.sendMessageButton}>Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DialogsC;