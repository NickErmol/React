import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
