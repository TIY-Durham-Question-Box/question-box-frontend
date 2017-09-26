import React, { Component } from 'react';
import '../../styles/header-styles.css';

export default class HeaderLogout extends Component {
  render() {
    return(
      <div className="header-logout-button" >
        <button type="button">Log Out</button>
      </div>
    )
  }
}
