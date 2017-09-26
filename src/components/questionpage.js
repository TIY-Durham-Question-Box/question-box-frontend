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
            <label>
              Title:
              <input type="text" value={this.state.title} readOnly/>
            </label>
            <label>
              Language:
              <input type="text" value={this.state.language} readOnly/>
            </label>
            <label>
              Tags:
              <input type="text" value={this.state.tags} readOnly/>
            </label>
            <label>
              Answer {this.state.history[0].answerId}:
              <input type="area" value={this.state.history[0].answer} readOnly/>
            </label>
          </div>
      </div>
    )
  }
}
