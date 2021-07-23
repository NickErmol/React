import {createSelector} from 'reselect'

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true);
}
//reselect call render when users is changed
export const getUsersSuperSelector = createSelector(getUsers, getFetchingStatus, (users, isFetching) => {
    return users.filter(u => true);
}) 

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getFetchingStatus = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}