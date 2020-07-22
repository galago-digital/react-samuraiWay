import React from "react";
import classes from "./Users.module.css";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = (props) => {
    return (
        <div className={classes.usersPage}>
            <Paginator currentPage = {props.currentPage}
                       onPageChanged = {props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>
            {props.users.map(u => <User user = {u}
                                        key={u.id}
                                        followingInProgress = {props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}/>
            )}
        </div>
    )
}

export default Users