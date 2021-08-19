import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage = {currentPage} pageSize = {pageSize} totalItemsCount = {totalUsersCount} onPageChanged = {onPageChanged}/>
            <div>
            {
                users.map((u) => <User user = {u}
                                        followingInProgress = {props.followingInProgress}
                                        unFollow = {props.unFollow}
                                        follow = {props.follow}
                                        key = {u.id}/> 
                 )
            }
            </div>
        </div>
    )
}                   

export default Users;