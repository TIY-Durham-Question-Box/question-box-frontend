import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header-styles.css';
import '../styles/App.css';
import HeaderGreeting from './header-components/header-greeting.js';
import HeaderSearch from './header-components/search-bar.js';
import logo from './header-components/logo.png';


export default class Header extends Component {
  render() {
    let testloginvar = true;
    let loggedInOrOut = null;
    //LOGIN LOGOUT SHOULD BE A PIPE
    if (testloginvar){
      loggedInOrOut =
        <div className="logged-in">
          <div className="header-log-button" >
            Log Out
          </div>
          <HeaderGreeting />
        </div>

    } else {
      loggedInOrOut =
      <div className="logged-out">
        <div className="header-log-button" >
          Login or Register
        </div>
      </div>
    }

    return(
      <div className="header-component" >
        <h1 className="header-top-logo">
          <Link to="/"><img className="header-top-logo-img" src={logo} alt="Logo"/></Link>
          <Link to="/" className="header-website-title"><div>Question Box</div></Link>
        </h1>
        <div className="header-input-field">
          <HeaderSearch />
          {loggedInOrOut}
        </div>
      </div>
    )
  }
}
