import React, { Component } from 'react';
import '../styles/App.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: "",
      secondpassword: "",
      email: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.register = this.register.bind(this);
  }
  register(event){
    event.preventDefault();
    console.log("register fired");
    //Username to post:
    console.log(event.target.username.value);
    //Password to post:
    console.log(event.target.secondpassword.value);
    //Email to post:
    console.log(event.target.email.value);
  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({[event.target.id]: event.target.value});
  }
  render() {
    return (
      <div className="loginregister-form-holder">
        <form className="loginregister-form-container" onSubmit={this.register}>
        <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input onChange={this.handleTextChange} type="text" id="username"
          placeholder="Username" name="username" value={this.state.username} required/><br/>
          <label htmlFor="password">Password:</label>
          <input onChange={this.handleTextChange} type="password" id="password"
          placeholder="Password" name="password" value={this.state.password} required/><br/>
          <label htmlFor="secondpassword">Re-Enter Password:</label>
          <input onChange={this.handleTextChange} type="password" id="secondpassword"
          placeholder="Password Again" name="secondpassword" value={this.state.secondpassword} required/><br/>
          <label htmlFor="email">Email:</label>
          <input onChange={this.handleTextChange} type="email" id="email"
          placeholder="Email" name="email" value={this.state.email} required/><br/>
          <button className="loginregister-submit-button" type="submit">Register</button>
        </form>
      </div>
    )
  }
}
