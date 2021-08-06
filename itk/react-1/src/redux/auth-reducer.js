import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_USER_PHOTO = 'auth/SET_USER_PHOTO';


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

export const getAuthUserData = () => 
async dispatch => {
  let response = await authAPI.getMyData();
    if (response.data.resultCode === 0) {
      let {id, login, email} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    } 
};
  

export const login = (email , password, rememberMe) => 
async dispatch => {
  let response = await authAPI.login(email , password, rememberMe);
  
  if (response.data.resultCode === 0) {
    dispatch( getAuthUserData());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0]:'Some error';
    dispatch(stopSubmit('login', {_error: message}));
  }
}


export const logout = () => 
  async dispatch => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    } 
}

export default authReducer;