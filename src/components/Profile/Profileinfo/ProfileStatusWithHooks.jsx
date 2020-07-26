import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () =>{
        setEditMode(true)
    }
    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <b>Status:</b> <span  onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} value={status} onChange={onStatusChange} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks