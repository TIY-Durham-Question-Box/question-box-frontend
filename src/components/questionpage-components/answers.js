import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class Answers extends Component {

  render() {
    console.log(this.props.data);
    return (
      <div className="answer-component">
        <div className="answer-attribution">
          <div>Answer {this.props.data[0].answerId}</div>
          <div>by {this.props.data[0].user}</div>
        </div>
        <div className="answer-body">
          <textarea readOnly value={this.props.data[0].answer}/>
        </div>
      </div>
    )
  }
}
