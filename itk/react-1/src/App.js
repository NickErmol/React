import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
  return ( 
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        {/* <Route path ='/dialogs' component={Dialogs} /> */}

        <Route path ='/dialogs' render={()=><Dialogs state = {props.state.dialogsPage} />} />
        <Route path ='/profile' render={()=><Profile profilePage = {props.state.profilePage}
                                                     addPost = {props.addPost}
                                                     updateNewPostText = {props.updateNewPostText}
                                            />} 
        />
        <Route path ='/news' render={()=><News/>} />
        <Route path ='/music' render={()=><Music/>} />
        <Route path ='/settings' render={()=><Settings/>} />
      </div>
    </div>
  );
};

export default App;
