import React, { Component } from 'react';
import '../styles/question-page.css';

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
          answer: "Rambo was master of Randos.  Rhonda Rousey was cool for a time, too."
        }
      ]
    }
  }

  render() {
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
            <p className="active-question-textarea">:
              <textarea value={this.state.question} readOnly />
            </p>
            <p>
              Answer {this.state.history[0].answerId}:
              <textarea readOnly value={this.state.history[0].answer} />
            </p>
          </div>
      </div>
    )
  }
}
