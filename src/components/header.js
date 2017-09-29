import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header-styles.css';
import '../styles/App.css';
import HeaderSearch from './header-components/search-bar.js';
import logo from './header-components/logo.png';


export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      fireRedirect: false
    }
  }
  redirect = (event) => {
    event.preventDefault();
    this.setState({ fireRedirect: true });
  }
  render() {
    let testloginvar = false;
    let loggedInOrOut = null;
    //LOGIN LOGOUT SHOULD BE A PIPE
    if (testloginvar){
      loggedInOrOut =
        <div className="logged-in">
          <div className="header-log-button" >
            Log Out
          </div>
          <div className="header-greeting-component" >
            Hello, User.
          </div>
        </div>
    } else {
      loggedInOrOut =
      <div className="logged-out">
        <Link className="header-log-button" to="/login">
          <div>
            Login or Register
          </div>
        </Link>
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
