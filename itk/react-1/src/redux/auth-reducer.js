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
                ...action.data, isAuth: true
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

const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data : {userId, email, login}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_DATA, photo});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getMyData()
        .then(data => {
          let {id, login, email} = data.data;
          if (data.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login));
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

  export const login = () => {
    return (dispatch) => {
        authAPI.login()
        .then(response => {
          let {email , password , rememberMe } = response.data.data;
          if (response.resultCode === 0) {
            dispatch(setAuthUserData(email, password , rememberMe ));
          } 
        })
    }
  }

export default authReducer;