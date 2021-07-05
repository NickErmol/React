import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPagesAC, setUsersAC, unFollowAC, setTotalUsersCountAC } from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) =>{
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPagesAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);