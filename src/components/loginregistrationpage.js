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
        showloginpage: false
      };
      this.switchpagetologin = this.switchpagetologin.bind(this);
      this.switchpagetoregister = this.switchpagetoregister.bind(this);
    }
  switchpagetologin(event){
    this.setState({ showloginpage: true });
  }
  switchpagetoregister(event){
    this.setState({ showloginpage: false });
  }
  render() {
    return (
      <div>
      <Header />
        <div className="loginregistrationpage-component" >
        <h1>Login Registration Page</h1>
          <div className="login-register-switch">
            {this.state.showloginpage ? <Login/> : <Register/>}
            <p><span id="login" onClick={this.switchpagetologin}>Login</span> | <span id="register" onClick={this.switchpagetoregister}>Register</span></p>
          </div>
        </div>
      <Footer />
      </div>
    )
  }
}
