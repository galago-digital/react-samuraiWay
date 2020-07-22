import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'

let profileInitialState = {
    posts: [
        {id: 1, message: "hi? How are you?", likesCount: 15},
        {id: 2, message: "ololololol", likesCount: 10},
        {id: 3, message: "norm", likesCount: 5},
        {id: 4, message: "chivo", likesCount: 2}
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.myPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postID)
            }
        }
        default :
            return state;
    }
}
export const addPostActionCreator = (myPostText) => ({type: ADD_POST, myPostText});
export const setUserProfileData = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postID) => ({type: DELETE_POST, postID});

export const setUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.profileData(userId)
    dispatch(setUserProfileData(data))
}
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default profileReducer;