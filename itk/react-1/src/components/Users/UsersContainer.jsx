import React from 'react';
import {connect} from 'react-redux';
import {follow, setCurrentPage, unFollow,toggleFollowingProgress, requestUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getFetchingStatus, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers } from '../../redux/usersSelectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users}
                              follow={this.props.follow}
                              unFollow={this.props.unFollow}
                              followingInProgress={this.props.followingInProgress}
                />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
        return {
            users: getUsers(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getFetchingStatus(state),
            followingInProgress: getFollowingInProgress(state)
        }
    }

export default compose(
    connect(mapStateToProps, 
        {follow, unFollow, setCurrentPage, 
            toggleFollowingProgress, requestUsers}),
    withAuthRedirect
    )(UsersContainer);