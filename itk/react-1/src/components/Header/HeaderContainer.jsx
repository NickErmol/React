import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import { compose } from 'redux';
import { logout } from '../../redux/auth-reducer';
import { getIsAuth, getLogin } from '../../redux/authSelectors';

class HeaderContainer extends React.Component{

  render(){
    return (
      <Header {...this.props}/>
    );
  }
};

let mapStateToProps = (state) =>({
  isAuth: getIsAuth(state),
  login: getLogin(state)
})

export default compose(
  connect(mapStateToProps, {logout})
)(HeaderContainer);
