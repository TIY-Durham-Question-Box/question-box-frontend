import React, { Component } from 'react';
import '../styles/App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login(event){
    console.log("login fired")
  }
  render() {
    return (
      <div className="login-component" >
        <h1>THIS IS THE LOGIN COMPONENT</h1>
        <div className="loginregister-form-holder">
          <form onSubmit={this.login}>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
