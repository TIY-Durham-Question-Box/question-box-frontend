import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class YourAnswer extends Component {


  render() {
    return (
      <div className="your-answer-component">
        <form onSubmit={this.handleSubmit}>
          <div>Your Answer</div>
          <textarea id="answer" onChange={this.handleTextChange} value={this.props.answer}/>
          <input type="Submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
