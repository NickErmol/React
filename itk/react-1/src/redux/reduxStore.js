import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sideBarReducer from './sideBarReducer'
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sideBar : sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

window.__store__ = store; 

export default store;