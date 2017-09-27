import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class YourAnswer extends Component {


  render() {
    return (
      <div className="your-answer-component">
        <form onSubmit={this.props.data.handleSubmit}>
          <div>Your Answer</div>
          <textarea onChange={this.props.data.setAnswer} value={this.props.data.answer}/>
          <input type="Submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
