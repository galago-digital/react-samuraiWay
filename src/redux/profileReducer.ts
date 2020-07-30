import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'


type addPostActionCreatorActionType = {
    type: typeof ADD_POST,
    myPostText: string
}
type setUserProfileDataActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
type deletePostActionType = {
    type: typeof DELETE_POST,
    postID: number
}
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
type ActionType = addPostActionCreatorActionType |
    setUserProfileDataActionType |
    setStatusActionType |
    deletePostActionType |
    savePhotoSuccessActionType
let profileInitialState = {
    posts: [
        {id: 1, message: "hi? How are you?", likesCount: 15},
        {id: 2, message: "ololololol", likesCount: 10},
        {id: 3, message: "norm", likesCount: 5},
        {id: 4, message: "chivo", likesCount: 2}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}
export type profileInitialStateType = typeof profileInitialState

const profileReducer = (state = profileInitialState, action: ActionType): profileInitialStateType => {
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default :
            return state;
    }
}

export const addPostActionCreator = (myPostText: string): addPostActionCreatorActionType => ({type: ADD_POST, myPostText});
export const setUserProfileData = (profile: ProfileType): setUserProfileDataActionType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status});
export const deletePost = (postID: number): deletePostActionType => ({type: DELETE_POST, postID});
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const setUserProfile = (userId:number) => async (dispatch: any) => {
    let data = await profileAPI.profileData(userId)
    dispatch(setUserProfileData(data))
}
export const getStatus = (userId:number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}
export const updateStatus = (status:string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        dispatch(setUserProfile(userId))
    }else{
        dispatch(stopSubmit('editProfile', {_error: data.messages[0]}))
    }
}
export default profileReducer;