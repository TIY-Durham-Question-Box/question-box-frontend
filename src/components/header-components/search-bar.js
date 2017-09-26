import React, { Component } from 'react';
import '../../styles/header-styles.css';
import { Redirect } from 'react-router-dom';

export default class HeaderSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      fireRedirect: false
    }
  }
  submitForm = (event) => {
    event.preventDefault();
    this.setState({ fireRedirect: true })
  }
  render() {
    return(
      <div className="header-search-component" >
        <form onSubmit={this.submitForm} className="header-search-form">
          <label className="header-search-bar">
          <input className="header-search-input" type="text" value="" />
          <input className="header-search-button" type="submit" value="Search" />
          </label>
        </form>
        {this.state.fireRedirect && (
          <Redirect to={"/"}/>
        )}
      </div>
    )
  }
}
