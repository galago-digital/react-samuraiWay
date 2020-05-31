const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profileInitialState = {
    posts : [
        {id: 1, message: "hi? How are you?", likesCount: 15},
        {id: 2, message: "ololololol", likesCount: 10},
        {id: 3, message: "norm", likesCount: 5},
        {id: 4, message: "chivo", likesCount: 2}
    ],
    newPostText: ""
}

const profileReducer = (state = profileInitialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost ={
            id : 5,
            message: state.newPostText,
            likesCount: 0
        };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state;
    }
}
export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;