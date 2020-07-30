import {setAuthUserData} from "./authReducer";
const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export type initialStateType = {
    initialized: boolean,
}
type ActionTypes = initializedSuccessActionType

let appInitialState: initialStateType = {
    initialized: false,
}

const appReduser = (state = appInitialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(setAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReduser;