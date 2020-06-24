import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReduser from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;