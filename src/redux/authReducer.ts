import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

export type initialStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string
}
type setAuthUserStatusActionDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setAuthUserStatusActionType = {
    type: typeof SET_USER_DATA
    data:  setAuthUserStatusActionDataType
}
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    data: { captchaUrl: string }
}
type ActionsType = setAuthUserStatusActionType | getCaptchaUrlSuccessActionType

let initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}
export const setAuthUserStatus = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserStatusActionType => ({
    type: SET_USER_DATA, data: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}
});
export const setAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.auth()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserStatus(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const getCaptchaUrl = () => async (dispatch:any) => {
    const data = await securityAPI.getCapture()
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch:any) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserStatus(null, null, null, false))
    }
}


export default authReducer;