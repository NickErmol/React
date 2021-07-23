import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';


const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    photo: 'some photo'
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload
                };
        case SET_USER_PHOTO: 
            return {
            ...state,
                ...action.photo
            }

        default:
        return state;
    }
};

const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload : {userId, email, login, isAuth}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_DATA, photo});

export const getAuthUserData = () => {
    return (dispatch) => {
        return  authAPI.getMyData()
        .then(data => {
          let {id, login, email} = data.data;
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true));
            // return id;
          } 
        })
        // .then (userId => {
        //   usersAPI.getProfile(userId)
        //   .then(resp => {
        //     this.props.setAuthUserPhoto(resp.photos.small);
        //   })
        // })
    }
  }

  export const login = (email , password, rememberMe) => (dispatch) => {
      authAPI.login(email , password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch( getAuthUserData());
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0]:'Some error';
          dispatch(stopSubmit('login', {_error: message}));
        }
      })
  }


  export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          } 
        })
    }
  }

export default authReducer;