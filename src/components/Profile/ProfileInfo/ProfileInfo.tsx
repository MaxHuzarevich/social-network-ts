import React from 'react';
import s from './ProfileInfo.module.css';
import {OwnPropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

function ProfileInfo(props: OwnPropsType) {
    if (!props.profile.userId) {
        return <Preloader/>
    }
    return <div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}  alt='photo'/>
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;