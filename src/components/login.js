import React, { Component } from 'react';
import '../styles/App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.login = this.login.bind(this);
  }
  login(event){
    event.preventDefault();
    //Username to post:
    console.log(event.target.username.value);
    //Password to post:
    console.log(event.target.password.value);
  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({[event.target.id]: event.target.value});
  }
  render() {
    return (
      <div className="login-component" >
        <h1>THIS IS THE LOGIN COMPONENT</h1>
        <div className="loginregister-form-holder">
          <form className="loginregister-form-container" onSubmit={this.login}>
            <label htmlFor="username">Username:</label>
            <input onChange={this.handleTextChange} type="text" id="username"
            placeholder="Username" name="username" value={this.state.username}/>
            <label htmlFor="password">Password:</label>
            <input onChange={this.handleTextChange} type="password" id="password"
            placeholder="Password" name="password" value={this.state.password}/>
            <button className="loginregister-submit-button" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
