import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage

                let addMessage = () => {
                    store.dispatch(addMessageCreator())
                }
                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageCreator(text))
                }
                return (
                    <Dialogs updateNewMessageCreator={onMessageChange}
                             sendMessage={addMessage}
                             dialogsPage={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;