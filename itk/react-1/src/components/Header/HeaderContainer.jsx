import React from "react";
import * as axios from 'axios';
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import { usersAPI, authAPI } from '../../API/api';
import { compose } from "redux";

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.getAuthUserData();
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

export default compose(
  connect(mapStateToProps, {getAuthUserData, setAuthUserPhoto})
)(HeaderContainer);
