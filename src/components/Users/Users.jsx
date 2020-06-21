import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/no-img-avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {follow, usersAPI} from "../../api/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.usersPage}>
            <div>
                {pages.map(p => {
                        return (
                            <span className={props.currentPage === p && classes.selectPage}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p}</span>
                        )
                    }
                )}
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={classes.userCard}>
                    <div className={classes.avaSubmit}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""
                                     className={classes.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.unfollow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={classes.userData}>
                        <div className={classes.userNameStatus}>
                            <div className={classes.userName}>{u.name}</div>
                            <div className={classes.userStatus}>{u.status}</div>
                        </div>
                        <div className={classes.userLocation}>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users