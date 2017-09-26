import React, { Component } from 'react';
import '../styles/question-page.css';
import Answers from './questionpage-components/answers.js';

export default class QuestionPage extends Component {
  constructor(){
    super();

    this.setTitle = this.setTitle.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.setTags = this.setTags.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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

  setTitle = (e) => {
    this.setState({title:e.target.value});
  }
  setLanguage = (e) => {
    this.setState({language:e.target.value});
  }
  setTags = (e) => {
    this.setTags({tags:e.target.value});
  }
  setQuestion = (e) => {
    this.setState({question:e.target.value});
  }
  handleSubmit = (e) => {
    e.prevendDefault();
    console.log(this.state);
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
              <input type="text" onChange={this.setTitle} value={this.state.title} readOnly={locked} />
            </p>
            <p>
              Language:
              <input type="text" onChange={this.setLanguage} value={this.state.language} readOnly={locked} />
            </p>
            <p>
              Tags:
              <input type="text" onChange={this.setTags} value={this.state.tags} readOnly={locked} />
            </p>
            <p className="active-question-textarea">
              Question:
              <textarea onChange={this.setQuestion} value={this.state.question} readOnly={locked} />
            </p>
              {editButton}
            </form>
              {answers}
          </div>
      </div>
    )
  }
}
