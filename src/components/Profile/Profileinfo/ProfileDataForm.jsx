import React from "react";
import classes from "./ProfileInfo.module.css";
import {Contact} from "./ProfileInfo";
import {reduxForm} from "redux-form";
import {createField} from "../../Common/FormsControl/FormControl";
import {Input} from "../../Login/Login";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <b>Name:</b> {createField(Input, 'fullName', 'Full Name', [])}
                    </div>
                    <div>
                        <b>Looking for a job:</b>{createField(Input, 'lookingForAJob', '', [], {type: 'checkbox'})}
                    </div>
                    <div>
                        <b>My
                            skills:</b> {createField(Input, 'lookingForAJobDescription', 'My skills', [], {type: 'textarea'})}
                    </div>
                    <div>
                        <b>About me:</b> {createField(Input, 'aboutMe', 'About me', [], {type: 'textarea'})}
                    </div>
                    <div>
                        <b>Contacts:</b>
                        <div className={classes.contacts}>
                            {Object.keys(profile.contacts).map(key => {
                                    return (
                                        <div key={key}>
                                            <b>{key}:</b>{createField(Input, 'contacts.' + key, key, [])}
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                    {error && <div className={classes.formSumError}>
                        {error}
                    </div>}
                </div>
            </form>
        </div>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm