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
        <div>
          <HeaderGreeting />
          <HeaderLogout />
        </div>

    } else {
      loggedInOrOut =
        <HeaderLogin />
    }
    
    return(
      <div className="header-component" >
        <h1>Question Box</h1>
        <HeaderSearch />
        {loggedInOrOut}
      </div>
    )
  }
}
