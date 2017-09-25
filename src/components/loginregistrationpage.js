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
  switchpage(event){
    if (event.target.id === "login" && event.target.id === "register"){
      this.setState({ pageswitch: event.target.id });
    }
  }
  render() {
    return (
      <div>
      <Header />
        <div className="loginregistrationpage-component" >
        <h1>Login Registration Page</h1>
          <div className="login-register-switch">
            <p><span id="login" onClick={this.switchpage}>Login</span> | <span id="register" onClick={this.switchpage}>Register</span></p>
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}
