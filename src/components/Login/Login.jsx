import React from 'react'
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import Element, {createField} from "../Common/FormsControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './../Common/FormsControl/FormControl.module.css'

const Input = Element("input");
const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit={handleSubmit}>
                {createField(Input, 'email', "Email",[required] )}
                {createField(Input, 'password', "Password",[required], {type: 'password'} )}
                {createField(Input, 'rememberMe', null,[], {type: 'checkbox'}, "Remember me" )}
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login)