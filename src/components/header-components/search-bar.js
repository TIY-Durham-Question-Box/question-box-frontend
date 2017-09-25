import React, { Component } from 'react';
import '../../styles/header-styles.css';

export default class HeaderSearch extends Component {
  render() {
    return(
      <div className="header-search-component" >
        <form>
          <label>
          <input type="text" value="" />
          <input type="submit" value="Search" />
          </label>
        </form>
      </div>
    )
  }
}
