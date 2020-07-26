import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import Element, {createField} from "../Common/FormsControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../Common/FormsControl/FormControl.module.css'

export const Input = Element("input");
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit}>
                {createField(Input, 'email', "Email",[required] )}
                {createField(Input, 'password', "Password",[required], {type: 'password'} )}
                {createField(Input, 'rememberMe', null,[], {type: 'checkbox'}, "Remember me" )}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <div>{createField(Input, 'captcha', "captchaCode",[required] )}</div>}

                {error && <div className={classes.formSumError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) =>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login)