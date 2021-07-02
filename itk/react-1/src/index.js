// import store from './redux/store'
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App state = {store.getState().state} dispatch = {store.dispatch.bind(store)} store = {store}/>
    </Provider>
  </BrowserRouter>,document.getElementById('root')
);



