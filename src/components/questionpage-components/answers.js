import React, { Component } from 'react';
import '../../styles/question-page.css';

export default class Answers extends Component {

  render() {
    console.log(this.props.data);
    return (
      <div>
        <div>
        </div>
        <div>
          Answer {this.props.data[0].answerId}, by {this.props.data[0].user}:
          <textarea readOnly value={this.props.data[0].answer}/>
        </div>
      </div>
    )
  }
}
