import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class Answers extends Component {

  render() {
    return (
      <div className="answer-component">
        <div className="answer-attribution">
          <div>Answer {this.props.data.userId}</div>
          <div>by {this.props.data.user}</div>
        </div>
        <div className="answer-body">
          <textarea readOnly value={this.props.data.body}/>
        </div>
      </div>
    )
  }
}
