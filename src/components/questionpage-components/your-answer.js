import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class YourAnswer extends Component {


  render() {
    return (
      <div className="your-answer-component">
        <form onSubmit={this.handleSubmit}>
          <div>Your Answer</div>
          <textarea id="answer" onChange={this.props.onChange} value={this.props.value}/>
          <input type="Submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
