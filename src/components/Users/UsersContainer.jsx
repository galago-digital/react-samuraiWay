import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import Users from './Users';
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow
} from '../../redux/usersReducer';
import Preloader from "../Common/Preloader/Preloader";
import {getUsers, usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }



export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
    })(UsersContainer)