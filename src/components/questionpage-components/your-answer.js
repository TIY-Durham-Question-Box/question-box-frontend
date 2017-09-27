import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class YourAnswer extends Component {


  render() {
    return (
      <div className="answer-component">
        <div className="answer-attribution">
          <div>Your Answer</div>
        </div>
        <div className="answer-body">
          <textarea />
        </div>
      </div>
    )
  }
}
