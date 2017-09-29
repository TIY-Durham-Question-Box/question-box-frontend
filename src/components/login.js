import React, { Component } from 'react';
import '../styles/App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: ""
    }
    this.login = this.login.bind(this);
  }
  login(event){
    event.preventDefault();
    //Username to post:
    console.log(event.target.username.value);
    //Password to post:
    console.log(event.target.password.value);
  }
  handleTextChange = (event) => {
    event.preventDefault();
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  render() {
    return (
      <div className="loginregister-form-holder">
        <form className="centered loginregister-form-container" onSubmit={this.login}>
        <h2 className="centered login-register-h2">Login</h2>
          <label htmlFor="username">Username:</label>
          <input className="centered" onChange={this.handleTextChange} type="text" id="username"
          placeholder="Username" name="username" value={this.state.username} required/><br/>
          <label htmlFor="password">Password:</label>
          <input className="centered" onChange={this.handleTextChange} type="password" id="password"
          placeholder="Password" name="password" value={this.state.password} required/><br/>
          <button className="loginregister-submit-button" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
