import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Nav/Nav";
import WithUrlDataContainerComponent from "./components/Profile/ProfileContainer";
import { Route } from "react-router";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return ( 
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path ='/dialogs' component={Dialogs} /> */}

        <Route path ='/dialogs' render={()=><DialogsContainer/>} />
        <Route path ='/profile/:userId?' render={()=><WithUrlDataContainerComponent/>} />
        <Route path ='/users' render={()=><UsersContainer/>} />
        <Route path ='/news' render={()=><News/>} />
        <Route path ='/music' render={()=><Music/>} />
        <Route path ='/settings' render={()=><Settings/>} />
        <Route path ='/login' render={()=><Login/>} />
      </div>
    </div>
  );
};

export default App;
