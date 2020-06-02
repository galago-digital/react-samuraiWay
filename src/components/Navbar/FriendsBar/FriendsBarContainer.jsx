import React from 'react';
import FriendsBar from "./FriendsBar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar
    }
}
const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)

export default FriendsBarContainer;