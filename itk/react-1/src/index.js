// import store from './redux/store'
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store}/>
    </BrowserRouter>,document.getElementById('root')
  );
}
store.subscribe(() => {
  let state = store.getState();   
  rerenderEntireTree(state)});

rerenderEntireTree(store.getState());

