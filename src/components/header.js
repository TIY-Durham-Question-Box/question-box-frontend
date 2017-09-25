import React, { Component } from 'react';
import '../styles/header-styles.css';
import HeaderGreeting from './header-components/header-greeting.js'
import HeaderLogin from './header-components/registration-login.js'
import HeaderLogout from './header-components/logout-button.js'
import HeaderSearch from './header-components/search-bar.js'


export default class Header extends Component {
  render() {
    let loggedInOrOut = null;
    if ("test"==="test"){
      loggedInOrOut =
        <div className="logged-in">
          <HeaderGreeting />
          <HeaderLogout />
        </div>

    } else {
      loggedInOrOut =
      <div className="logged-out">
        <HeaderLogin />
      </div>
    }

    return(
      <div className="header-component" >
        <h1>Question Box</h1>
        <div className="header-input-field">
          <HeaderSearch />
          {loggedInOrOut}
        </div>
      </div>
    )
  }
}
