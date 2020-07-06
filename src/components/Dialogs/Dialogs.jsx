import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import Element from "../Common/FormsControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

const Textarea = Element("textarea");
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.messageSendBar}>
                <Field component={Textarea} name={"newMessageText"} placeholder="Input text"
                       className={classes.messageText} validate ={[required, maxLength50 ]}/>
                <div>
                    <button className={classes.sendMessageButton}>Send</button>
                </div>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElement = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
    }
    return (
        <div className={classes.dialogPage}>
            <div className={classes.dialogsMenu}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>

    )
}


export default Dialogs;