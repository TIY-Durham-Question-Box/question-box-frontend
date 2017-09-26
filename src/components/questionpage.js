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
      tags: ['Question', 'Random'],
      question: "This is just some place holder text for the question.  This question is about JavaScript, specifically, it's about ECMAscript.  You know, cuz it's kinda cool to talk about random synonyms.",
      history: [
        {
          answerId: 1,
          user: "Ted",
          answer: "Rambo was master of randos.  Rhonda Rousey was cool for a time, too."
        },{
          answerId: 2,
          user: "Jimbo",
          answer: "Jimbo was master of jingos.  Meisha Tate was cooler."
        }
      ]
    }
  }

  render() {
    let allAnswers = this.state.history;
    let answers = allAnswers.map((answers)=>{
      return(<Answers data={answers}/>)
    });

    return (
      <div>
          <div className="questionpage-component" >
            <h1>Question Page</h1>
            <p>
              Title:
              <input type="text" value={this.state.title} readOnly/>
            </p>
            <p>
              Language:
              <input type="text" value={this.state.language} readOnly/>
            </p>
            <p>
              Tags:
              <input type="text" value={this.state.tags} readOnly/>
            </p>
            <p className="active-question-textarea">
              Question:
              <textarea value={this.state.question} readOnly />
            </p>
              {answers}
          </div>
      </div>
    )
  }
}
