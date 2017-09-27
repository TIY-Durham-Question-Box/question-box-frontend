import React, { Component } from 'react';
import '../../styles/header-styles.css';
import { Redirect } from 'react-router-dom';

export default class HeaderSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      fireRedirect: false,
      searchbartext: ""
    }
  }
  submitForm = (event) => {
    event.preventDefault();
    if (this.state.searchbartext){
      this.setState({ fireRedirect: true, searchbartext: event.target["searchbartext"].value  })
    }
  }
  handleTextChange = (event) => {
    event.preventDefault();
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value , fireRedirect: false});
    }
  }
  render() {
    return(
      <div className="header-search-component" >
        <form onSubmit={this.submitForm} className="header-search-form">
          <label className="header-search-bar">
          <input className="header-search-input" onChange={this.handleTextChange}
          id="searchbartext" placeholder="Search Here..." type="text" value={this.state.searchbartext} />
          <input className="header-search-button" type="submit" value="Search" />
          </label>
        </form>
        {this.state.fireRedirect && (
          <Redirect to={`/?=${this.state.searchbartext}`}/>
        )}
      </div>
    )
  }
}
