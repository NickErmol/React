
export const getProfile = (state) => {
    return  state.profilePage.profile;
}

export const getProfileStatus = (state) => {
    return state.profilePage.status;
}

export const getProfilePosts = (state) => {
    return state.profilePage.posts;
}

export const getProfileNewPostText = (state) => {
    return state.profilePage.newPostText;
}