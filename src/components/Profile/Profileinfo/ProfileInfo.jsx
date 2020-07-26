import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/no-img-avatar.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) =>{
        props.saveProfile(formData)
        setEditMode(false)
    }
    return (
        <div>
            <div className={classes.description}>
                <img src={props.profile.photos.large || userPhoto} className={classes.userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                <b>Name:</b> {props.profile.fullName}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            { editMode
                ? <ProfileDataFormReduxForm initialValues={props.profile} profile = {props.profile} status = {props.status} onSubmit={onSubmit} />
                : <ProfileData profile = {props.profile} status = {props.status} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)} updateStatus={props.updateStatus} />}
        </div>

    )
}

const ProfileData = (props) =>{
    return (
        <div>
            <div>
                {props.isOwner && <button onClick={props.goToEditMode}>Edit</button>}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>My skills:</b> {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>
                <div className={classes.contacts}>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })}
                </div>
            </div>
        </div>
    )
}


export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}
export default ProfileInfo
