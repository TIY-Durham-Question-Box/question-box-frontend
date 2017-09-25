import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';
import Login from './login.js';
import Register from './register.js';

export default class LoginRegistrationPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        pageswitch: "register"
      };
      this.switchpage = this.switchpage.bind(this);
    }
  switchpage(x){
    console.log(x);
  }
  render() {
    return (
      <div>
      <Header />
        <div className="loginregistrationpage-component" >
        <h1>Login Registration Page</h1>
          <div className="login-register-switch">
            <p><a onClick={this.switchpage("login")}>Login</a> | <a onClick={this.switchpage("register")}>Register</a></p>
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}
