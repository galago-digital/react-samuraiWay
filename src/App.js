import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Route path="/dialog"
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           newMessageText = {props.state.dialogsPage.newMessageText}
                           dispatch = {props.dispatch}/>}/>
                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                <Route path="/news"
                       render={() => <News/>}/>
                <Route path="/music"
                       render={() => <Music/>}/>
                <Route path="/settings"
                       render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
