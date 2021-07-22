import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form'
import { Input } from '../Common/FormsControls/FormsControls';
import { maxLength, required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login, logout} from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import style from '../Common/FormsControls/FormsControls.module.css'

const maxLength40 = maxLength(40);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to = {'/profile'}/>;
    }
    

    return(
        <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return(
    <form onSubmit = {props.handleSubmit}>
        <div>
            <Field placeholder = {'Email'} name = {'email'} component = {Input} validate = {[required, maxLength40]}/>
        </div>
        <div>
            <Field placeholder = {'Password'}  name = {'password'} type = 'password' component = {Input} validate = {[required, maxLength40]}/>
        </div>
        <div>
            <Field type = {'checkbox'}  name = {'rememberMe'} component = {Input} /> remember me
        </div>
        {props.error && <div className = {style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login) ;