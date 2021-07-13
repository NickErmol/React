import React from 'react';
import {connect} from 'react-redux';
import {follow, setCurrentPage, unFollow,toggleFollowingProgress, getUsers} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    //     this.props.toggleIsFetching(true);

    //   usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(data.items);
    //             this.props.setTotalUsersCount(data.totalCount);
    //         });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber); 
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                            //   toggleFollowingProgress={this.props.toggleFollowingProgress}
                              followingInProgress={this.props.followingInProgress}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, 
    {follow, unFollow, setCurrentPage, 
        toggleFollowingProgress, getUsers})(UsersContainer);