import React from "react";
import * as axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component{

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials: true
    })
      .then(response => {
        let {id, login, email} = response.data.data;
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(id, email, login);
          return id;
        } 
      })
      .then (response => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response}`)
        .then(resp => {
          this.props.setAuthUserPhoto(resp.data.photos.small);
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
