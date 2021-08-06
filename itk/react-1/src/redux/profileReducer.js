import { profileAPI } from '../API/api';

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

const initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likesCount: 10 },
    { id: '2', message: "It's my first post", likesCount: 12 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return{...state,
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE: 
    return {
      ...state,
      profile: action.profile
    };
    case SET_STATUS: {
      return {
          ...state,
          status: action.status
      }
    }
    case DELETE_POST: {
      return {
          ...state,
          posts: state.posts.filter( p => p.id != action.postId)
      }
    }  
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setStatus = (status) => ({type: SET_STATUS, status})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => 
  async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  }


export const getStatus = (userId) => 
  async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) =>
  async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;