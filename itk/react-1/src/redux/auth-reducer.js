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

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data : {userId, email, login}});
export const setAuthUserPhoto = (photo) => ({type: SET_USER_DATA, photo});

export default authReducer;