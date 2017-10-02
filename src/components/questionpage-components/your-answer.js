import React, { Component } from 'react';
import '../../styles/question-page.css';
import request from 'superagent';

export default class YourAnswer extends Component {
  consturctor(){
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  submitAnswer = () => {
    let api = 'https://secure-beyond-80954.herokuapp.com';
    console.log(`submitAnswer executed, ${this.props.value}`);
    request
      .post(api+"/questions/"+"3"+"/answers")
      .send({
        "answer": {
          "body": `${this.props.value}`
        }
      })
      .set('Authorization', `Token token=${this.props.token}`)
      .end((err,res)=>{
        if(err){
          console.error(err);
        } else{
          alert('Yay got ' + JSON.stringify(res.body));
        }
      })
  }

  render() {
    return (
      <div className="your-answer-component">
        <form onSubmit={this.submitAnswer}>
          <div>Your Answer</div>
          <textarea id="answer" onChange={this.props.onChange} value={this.props.value}/>
          <input type="Submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
