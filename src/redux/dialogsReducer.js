const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let dialogsInitialState ={
    dialogs : [
        {id: 1, name: "Joe"},
        {id: 2, name: "Vick"},
        {id: 3, name: "Mickey"},
        {id: 4, name: "Nick"}
    ],
    messages : [
        {id: 1, message: "Hello"},
        {id: 2, message: "My"},
        {id: 3, message: "Pony"},
        {id: 4, message: "Amazing"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = dialogsInitialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = "";
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        default :
            return state;

    }
}
export const addMessageCreator = () =>({type: ADD_MESSAGE});
export const updateNewMessageCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsReducer;