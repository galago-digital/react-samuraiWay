const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
    _state : {
        profilePage:{
            posts : [
                {id: 1, message: "hi? How are you?", likesCount: 15},
                {id: 2, message: "ololololol", likesCount: 10},
                {id: 3, message: "norm", likesCount: 5},
                {id: 4, message: "chivo", likesCount: 2}
            ],
            newPostText: ""
        },
        dialogsPage:{
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
        },
        sidebar: {
            friend : [
                {ava: "/img/avatars/04bcd7b319425e737c9df24fbab151fe.jpg", name: "Anna"},
                {ava: "/img/avatars/cover-2-2-768x507.jpg", name: "Den"},
                {ava: "/img/avatars/multfilm_pokemon_pikachu_20287.jpg", name: "Joe"},
                {ava: "/img/avatars/image.jpg", name: "Bill"},
                {ava: "/img/avatars/image.jpg", name: "Bill"}
            ]


        }
    },
    _callSubscriber() {
        console.log("State changed")
    },

    getState(){

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if  (action.type === ADD_POST){
            let newPost ={
                id : 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
        else if(action.type === ADD_MESSAGE){
            let newMessage ={
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageCreator = () =>({type: ADD_MESSAGE})
export const updateNewMessageCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default store;
window.store = store;