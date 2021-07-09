import React from "react";
import * as axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import { authAPI } from '../../API/api';

class HeaderContainer extends React.Component{

  componentDidMount(){
    authAPI.getUserAuthData()
    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
    //   withCredentials: true
    // })
      .then(data => {
        let {id, login, email} = data.data;
        if (data.resultCode === 0) {
          this.props.setAuthUserData(id, email, login);
          return id;
        } 
      })
      .then (userId => {
        authAPI.getUserData(userId)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response}`)
        .then(resp => {
          this.props.setAuthUserPhoto(resp.photos.small);
        })
      })
  }

  render(){
    return (
      <Header {...this.props}/>
    );
  }
};

let mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, setAuthUserPhoto})(HeaderContainer);
