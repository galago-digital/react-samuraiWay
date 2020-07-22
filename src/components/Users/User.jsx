import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/no-img-avatar.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={classes.userCard}>
                <div className={classes.avaSubmit}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                 className={classes.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </div>
                <div className={classes.userData}>
                    <div className={classes.userNameStatus}>
                        <div className={classes.userName}>{user.name}</div>
                        <div className={classes.userStatus}>{user.status}</div>
                    </div>
                    <div className={classes.userLocation}>
                        <div>{"user.location.country"}</div>
                        <div>{'user.location.city'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User