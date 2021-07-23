import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { logout } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component{

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
  connect(mapStateToProps, {logout})
)(HeaderContainer);
