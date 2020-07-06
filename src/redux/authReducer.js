import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,

            }
        default:
            return state
    }
}
export const setAuthUserStatus = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setAuthUserData = () =>{
    return (dispatch) =>{
        authAPI.auth()
            .then(data => {
                if (data.resultCode ===0){
                    let {id, email, login} = data.data
                    dispatch (setAuthUserStatus(id, email, login, true))
                }
            })
    }
}
export const login = (email,password,rememberMe) =>{
    return (dispatch) =>{
        authAPI.login(email,password,rememberMe)
            .then(data => {
                if (data.resultCode ===0){
                    dispatch(setAuthUserData())
                }
            })
    }
}
export const logout = () =>{
    return (dispatch) =>{
        authAPI.logout()
            .then(data => {
                if (data.resultCode ===0){
                    dispatch (setAuthUserStatus(null, null, null, false))
                }
            })
    }
}


export default authReduser;