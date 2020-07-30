import {usersAPI} from "../api/api";
import {usersType} from "../types/types";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

export type initialStateType = typeof initialState
type followSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
type unfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<usersType>
}
type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type  setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type toggleFollowingProgressActionType ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}

type ActionType = followSuccessActionType | unfollowSuccessActionType | setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType
let initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 36,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number> //array of users id
}
const usersReduser = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state

    }
}

export const followSuccess = (userId: number): followSuccessActionType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<usersType>): setUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
});

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
export const follow = (id: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    let data = await usersAPI.follow(id)
    if (data.resultCode === 0) {
        dispatch(followSuccess(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}
export const unfollow = (id: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    let data = await usersAPI.unfollow(id)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}


export default usersReduser;