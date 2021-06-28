import state from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import { BrowserRouter } from "react-router-dom";
import {subscribe} from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
    </BrowserRouter>,document.getElementById('root')
  );
}
subscribe(rerenderEntireTree);

rerenderEntireTree(state);

