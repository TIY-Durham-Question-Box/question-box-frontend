import React, { Component } from 'react';
import '../styles/App.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }
  register(event){
    console.log("register fired")
  }
  render() {
    return (
      <div className="register-component" >
        <h1>THIS IS THE REGISTER COMPONENT</h1>
        <div className="loginregister-form-holder">
          <form onSubmit={this.register}>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
