import React, { Component } from 'react';
import '../styles/question-page.css';
import Answers from './questionpage-components/answers.js';

export default class QuestionPage extends Component {
  constructor(){
    super();

    this.state = {
      questionId: 1,
      title: "Question of Randos",
      language: "JavaScript",
      tags: 'Question, Random',
      question: "This is just some place holder text for the question.  This question is about JavaScript, specifically, it's about ECMAscript.  You know, cuz it's kinda cool to talk about random synonyms.",
      history: [
        // {
        //   answerId: 1,
        //   user: "Ted",
        //   answer: "Rambo was master of randos.  Rhonda Rousey was cool for a time, too."
        // },{
        //   answerId: 2,
        //   user: "Jimbo",
        //   answer: "Jimbo was master of jingos.  Meisha Tate was cooler."
        // }
      ]
    }
  }
  handleSubmit = (e) => {
    e.prevendDefault();
    console.log(this.state);
  }
  handleTextChange = (event) => {
    event.preventDefault();
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  render() {
    let allAnswers = this.state.history;
    let answers = allAnswers.map((answers)=>{
      return(<Answers key={answers.answerId} data={answers} />)
    });
    let locked = false;
    let editButton = null;
    if (this.state.history.length > 0){
      locked = true;
    } else {
      editButton = <input type="Submit" value="Submit"/>
    }

    return (
      <div>
          <div className="questionpage-component" >
            <form onSubmit={this.handleSubmit}>
            <h1>Question Page</h1>
            <p>
              Title:
              <input type="text" id="title" onChange={this.handleTextChange} value={this.state.title} readOnly={locked} />
            </p>
            <p>
              Language:
              <input type="text" id="language" onChange={this.handleTextChange} value={this.state.language} readOnly={locked} />
            </p>
            <p>
              Tags:
              <input type="text" id="tags" onChange={this.handleTextChange} value={this.state.tags} readOnly={locked} />
            </p>
            <p className="active-question-textarea">
              Question:
              <textarea onChange={this.handleTextChange} id="question" value={this.state.question} readOnly={locked} />
            </p>
              {editButton}
            </form>
              {answers}
          </div>
      </div>
    )
  }
}
