import React, { Component } from 'react';
import '../../styles/header-styles.css';

export default class HeaderGreeting extends Component {
  render() {
    return(
      <div className="header-greeting-component" >
        Hello, User.
      </div>
    )
  }
}
