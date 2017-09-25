import React, { Component } from 'react';
import '../../styles/header-styles.css';

export default class HeaderSearch extends Component {
  render() {
    return(
      <div className="header-search-component" >
        <form className="header-search-form">
          <label className="header-search-bar">
          <input className="header-search-input" type="text" value="" />
          <input className="header-search-button" type="submit" value="Search" />
          </label>
        </form>
      </div>
    )
  }
}
