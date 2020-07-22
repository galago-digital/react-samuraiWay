const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

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
}

const dialogsReducer = (state = dialogsInitialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageText
            };
            return{
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default :
            return state;
    }
}
export const addMessageCreator = (newMessageText) =>({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;