import React, { Component } from 'react';
import '../styles/App.css';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : "",
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
      <div className="questionform-component" >
        <form className="question-form-container" onSubmit={this.register}>
        <h2>Question Form</h2>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleTextChange} type="text" id="title"
          placeholder="Title" name="title" value={this.state.title}/><br/>

          <label htmlFor="question">Question:</label>
          <textarea onChange={this.handleTextChange} type="text" id="question"
          placeholder="Type your question here" name="question" value={this.state.question}/><br/>

          <label htmlFor="tags">Re-Enter Password:</label>
          <input onChange={this.handleTextChange} type="text" id="tags"
          placeholder="tags" name="tags" value={this.state.secondpassword}/><br/>

          <button className="question-form-submit" type="submit">Submit question</button>
        </form>
      </div>
    )
  }
}
