import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

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
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
});
export const setAuthUserData = () => async (dispatch) => {
    let data = await authAPI.auth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserStatus(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserStatus(null, null, null, false))
    }
}


export default authReduser;