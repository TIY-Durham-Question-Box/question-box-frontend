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
      showloginpage: true
    };
    this.switchpagetologin = this.switchpagetologin.bind(this);
    this.switchpagetoregister = this.switchpagetoregister.bind(this);
  }
  switchpagetologin(){
    this.setState({ showloginpage: true });
  }
  switchpagetoregister(){
    this.setState({ showloginpage: false });
  }
  render() {
    return (
      <div>
      <Header />
        <div className="loginregistrationpage-component" >
        <h1>Login/Registration Page</h1>
          <div className="login-register-switch">
            {this.state.showloginpage ? <Login/> : <Register/>}
            <p className="login-register-switches"><span className="login-register-switch-button" onClick={this.switchpagetologin}>Login</span> | <span className="login-register-switch-button" onClick={this.switchpagetoregister}>Register</span></p>
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}
