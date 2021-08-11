import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Button} from "@material-ui/core";
import s from "./Users.module.css";
import user from '../../assets/images/user.gif'


export let Users = (props: UsersPropsType) => {

    //округляем кол-во страниц в большую сторону т.к. при делении может получиться нецелое число

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //кол-во страниц

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>//'p' по которому мы итерируемся будет текущей страничкой
            })}
        </div>
        {props.usersPage.users.map(u => <div key={u.id}>
            <div>
                <div className={s.UserImg}>
                    <img src={u.photos.small != null ? u.photos.small : user}/>
                </div>
                <div>
                    {u.followed ? <Button color={'default'} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</Button> :
                        <Button color={'default'} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</Button>}
                </div>
            </div>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
        </div>)}
    </div>
}