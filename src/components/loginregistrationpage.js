import React, { Component } from 'react';
import '../styles/App.css';
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
      <div className="body-component">
        <div className="loginregistrationpage-component" >
          <div className="login-register-holder">
            <p className="login-register-switches">
              <span id={this.state.showloginpage
                ? "styling-for-active-button"
                : ""}
                className="centered login-register-switch-button"
                onClick={this.switchpagetologin}>
                Login
              </span>
              <span id={this.state.showloginpage
                ? ""
                : "styling-for-active-button"}
                className="centered login-register-switch-button"
                onClick={this.switchpagetoregister}>
                Register
              </span>
            </p>
            {this.state.showloginpage
              ? <Login styles={this.state.showloginpage}/>
              : <Register styles={this.state.showloginpage}/>}
          </div>
        </div>
      </div>
    )
  }
}
