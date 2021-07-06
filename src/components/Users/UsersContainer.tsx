import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";

let MapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))             //мы диспатчим результат работы action creator-а
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users:Array<usersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)