// import store from './redux/store'
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./storeContext";


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App state = {state} dispatch = {store.dispatch.bind(store)} store = {store}/>
      </Provider>
    </BrowserRouter>,document.getElementById('root')
  );
}
store.subscribe(() => {
  let state = store.getState();   
  rerenderEntireTree(state)});

rerenderEntireTree(store.getState());

