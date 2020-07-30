const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';
type DialogsType = {
    id: null | number,
    name: null | string
}
type MessageType ={
    id: null | number,
    message: null | string
}
type AddMessageCreatorActionType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}
type ActionTypes = AddMessageCreatorActionType


let dialogsInitialState ={
    dialogs : []  as Array<DialogsType>,
    messages : []  as Array<MessageType>,
}
export type dialogsInitialStateType = typeof dialogsInitialState;
let initialState: dialogsInitialStateType ={
    dialogs: [
        {id: 1, name:'Joe'},
        {id:2, name: 'Vic'}
    ],
    messages: [
        {id: 1, message:'youyou'},
        {id:2, message: 'holahola'}
    ]
}

const dialogsReducer = (state = initialState, action:ActionTypes): dialogsInitialStateType => {
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

export const addMessageCreator= (newMessageText: string): AddMessageCreatorActionType =>({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;