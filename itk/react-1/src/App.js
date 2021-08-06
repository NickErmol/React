import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "./components/Header/Header";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Nav/Nav";
import { Route, withRouter } from "react-router";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {initializeApp} from './redux/appReducer';
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }

  render () {
    if (!this.props.initialized)
    return <Preloader/>

    return ( 
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path ='/dialogs' component={Dialogs} /> */}
  
          <Route path ='/dialogs' render={()=><DialogsContainer/>} />
          <Route path ='/profile/:userId?' render={()=><ProfileContainer/>} />
          <Route path ='/users' render={()=><UsersContainer/>} />
          <Route path ='/news' render={()=><News/>} />
          <Route path ='/music' render={()=><Music/>} />
          <Route path ='/settings' render={()=><Settings/>} />
          <Route path ='/login' render={()=><Login/>} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter,
  connect(mapStateToProps, {initializeApp}))
  (App) ;
