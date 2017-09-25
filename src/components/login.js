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
    console.log("login fired")
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
          <form onSubmit={this.login}>
            <input onChange={this.handleTextChange} type="text" id="username"
            placeholder="Username" value={this.state.username}/>
            <input onChange={this.handleTextChange} type="password" id="password"
             name="password" value={this.state.password}/>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
