import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import WithUrlDataContainerComponent from "./components/Profile/ProfileContainer";
import { Route } from "react-router";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return ( 
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path ='/dialogs' component={Dialogs} /> */}

        <Route path ='/dialogs' render={()=><DialogsContainer/>} />
        <Route path ='/profile/:userId?' render={()=><WithUrlDataContainerComponent/>} />
        <Route path ='/users' render={()=><UsersContainer/>} />
        <Route path ='/news' render={()=><News/>} />
        <Route path ='/music' render={()=><Music/>} />
        <Route path ='/settings' render={()=><Settings/>} />
      </div>
    </div>
  );
};

export default App;
