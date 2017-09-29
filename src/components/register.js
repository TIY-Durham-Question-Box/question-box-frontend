import React, { Component } from 'react';
import '../styles/App.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      name : "",
      password: "",
      secondpassword: "",
      email: "",
      registrationerror: false,
    }
    this.register = this.register.bind(this);
  }
  register(event){
    event.preventDefault();
    if (this.state.password !== this.state.secondpassword){
      this.setState({registrationerror:"Passwords do not match"});
      return
    }
    if (this.state.username.length < 4){
      this.setState({registrationerror:"Username must be at least 4 characters"});
      return
    }
    if (this.state.name.length < 2){
      this.setState({registrationerror:"Name must be at least 2 characters"});
      return
    }
    if (this.state.secondpassword.length < 4){
      this.setState({registrationerror:"Password must be at least 4 characters"});
      return
    }
    if (this.state.email.length < 5){
      this.setState({registrationerror:"Email must be at least 5 characters"});
      return
    }  else {
      var newuserdata = {
        username: this.state.username,
        name: this.state.name,
        email: this.state.email,
        password: this.state.secondpassword,
      }
      console.log("User Registered fired");
      var fetchConfig = { method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(newuserdata),
                    cache: 'default' };
      fetch(`https://secure-beyond-80954.herokuapp.com/user`, fetchConfig)
      .then(function(res){ console.log(res); })
    }
  }
  handleTextChange = (event) => {
    this.setState({registrationerror:false});
    event.preventDefault();
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  render() {
    return (
      <div className="loginregister-form-holder">
        <form className="centered loginregister-form-container" onSubmit={this.register}>
        <h2 className="login-register-h2">Register</h2>
          <label htmlFor="username">
            Display Username:
          </label>
          <input className="centered"
            onChange={this.handleTextChange}
            type="text" id="username"
            placeholder="Username"
            name="username"
            value={this.state.username} required/>
          <br/>
          <label htmlFor="name">
            Name:
          </label>
          <input className="centered"
            onChange={this.handleTextChange}
            type="text" id="name"
            placeholder="Name"
            name="name"
            value={this.state.name} required/>
          <br/>
          <label htmlFor="password">
            Password:
          </label>
          <input className="centered"
            onChange={this.handleTextChange}
            type="password" id="password"
            placeholder="Password"
            name="password"
            value={this.state.password} required/>
          <br/>
          <label htmlFor="secondpassword">
            Re-Enter Password:
          </label>
          <input className="centered"
            onChange={this.handleTextChange}
            type="password" id="secondpassword"
            placeholder="Password Again"
            name="secondpassword"
            value={this.state.secondpassword} required/>
          <br/>
          <label htmlFor="email">
            Email:
          </label>
          <input className="centered"
            onChange={this.handleTextChange}
            type="email" id="email"
            placeholder="Email"
            name="email"
            value={this.state.email} required/>
          <br/>
          <br/>
          {this.state.registrationerror
            ? (<p className="errormessage">{this.state.registrationerror}</p>)
            : ""}
          <br/>
          <button className="loginregister-submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    )
  }
}
