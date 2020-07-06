import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

let profileInitialState = {
    posts : [
        {id: 1, message: "hi? How are you?", likesCount: 15},
        {id: 2, message: "ololololol", likesCount: 10},
        {id: 3, message: "norm", likesCount: 5},
        {id: 4, message: "chivo", likesCount: 2}
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = profileInitialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.myPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            };

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default :
            return state;
    }
}
export const addPostActionCreator = (myPostText) =>({type: ADD_POST, myPostText});
export const setUserProfileData = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) =>({type: SET_STATUS, status});

export const setUserProfile = (userId) =>{
    return (dispatch) =>{
        profileAPI.profileData(userId)
            .then(data => {
                dispatch (setUserProfileData(data))
            })
    }
}
export const getStatus = (userId) =>(dispatch) =>{
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch (setStatus(data))
            })
    }

export const updateStatus = (status) =>(dispatch) =>{
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode ===0){
                    dispatch (setStatus(status))
                }
            })
    }



export default profileReducer;