import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';
import Login from './login.js';
import Register from './register.js';

export default class LoginRegistrationPage extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="loginregistrationpage-component" >
        </div>
      <Footer />
      </div>
    )
  }
}
