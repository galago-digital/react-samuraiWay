import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export default store;
window.store = store;