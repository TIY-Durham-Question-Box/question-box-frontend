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
    this.submitquestion = this.submitquestion.bind(this);
  }
  submitquestion(event){
    event.preventDefault();
    console.log("Question Submisson fired");
    //Title to post:
    console.log(event.target.title.value);
    //Question to post:
    console.log(event.target.question.value);
    //Tags to post:
    console.log(event.target.tags.value);
  }
  handleTextChange(event){
    event.preventDefault();
    this.setState({[event.target.id]: event.target.value});
  }
  render() {
    return (
      <div className="questionform-component" >
        <form className="question-form-container" onSubmit={this.submitquestion}>
        <h2>Question Form</h2>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleTextChange} type="text" id="title"
          placeholder="Title" name="title" value={this.state.title}/><br/>

          <label htmlFor="question">Question:</label>
          <textarea onChange={this.handleTextChange} type="text" id="question" className="questionform-textarea"
          placeholder="Type your question here" name="question" value={this.state.question}/><br/>

          <label htmlFor="tags">Tags:</label>
          <input onChange={this.handleTextChange} type="text" id="tags"
          placeholder="tags" name="tags" value={this.state.secondpassword}/><br/>

          <button className="question-form-submit-button" type="submit">Submit question</button>
        </form>
      </div>
    )
  }
}
