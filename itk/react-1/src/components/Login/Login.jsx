import React from 'react';
import s from './Login.module.css';
import {reduxForm} from 'redux-form'
import { CreateField, Input } from '../Common/FormsControls/FormsControls';
import { maxLength, required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import style from '../Common/FormsControls/FormsControls.module.css'
import { getIsAuth } from '../../redux/authSelectors';

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

const LoginForm = ({handleSubmit, error}) => {
    return(
    <form onSubmit = {handleSubmit}>
        {CreateField('Email', 'email', Input, [required, maxLength40])}
        {CreateField('Password', 'password', Input, [required, maxLength40], {type: 'password'})}
        {CreateField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

        {error && <div className = {style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) =>({
    // isAuth: getIsAuth(state),
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login) ;