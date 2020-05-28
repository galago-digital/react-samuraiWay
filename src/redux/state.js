import {rerenderEntireTree} from "../render";

//Данныу
let state = {
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
        ]
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
}

window.state = state;

export let addPost = () => {
    let newPost ={
        id : 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;