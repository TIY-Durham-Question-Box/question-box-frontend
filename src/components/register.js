import React, { Component } from 'react';
import '../styles/App.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password: ""
    }
    this.register = this.register.bind(this);
  }
  register(event){
    event.preventDefault();
    console.log("register fired");
  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({[event.target.id]: event.target.value});
  }
  render() {
    return (
      <div className="register-component" >
        <h1>THIS IS THE REGISTER COMPONENT</h1>
        <div className="loginregister-form-holder">
          <form onSubmit={this.register}>
            <input onChange={this.handleTextChange} type="text" id="username"
            placeholder="Username" value={this.state.username}/>
            <input onChange={this.handleTextChange} type="password" id="password"
            name="password" value={this.state.password}/>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
