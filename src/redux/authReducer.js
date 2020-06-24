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
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserStatus = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const setAuthUserData = () =>{
    return (dispatch) =>{
        authAPI.auth()
            .then(data => {
                if (data.resultCode ===0){
                    let {id, email, login} = data.data
                    dispatch (setAuthUserStatus(id, email, login))
                }
            })
    }
}

export default authReduser;