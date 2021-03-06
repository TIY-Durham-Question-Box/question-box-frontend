import React, { Component } from 'react';
import '../styles/question-page.css';
import '../styles/App.css';
import Answers from './questionpage-components/answers.js';
import YourAnswer from './questionpage-components/your-answer.js';
import request from 'superagent'

export default class QuestionPage extends Component {
  constructor(){
    super();

    this.state = {
      username: 'TilboTaggins',
      questionAuthor: '',
      questionId: null,
      answer: '',
      title: '',
      language: '',
      tags: '',
      question: '',
      testdata: false,
      history: []
    }
  }
  handleSubmit = (e) => {
    e.prevendDefault();
    console.log(this.state);

  }
  handleTextChange = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    if (this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }
  componentWillMount(){
    let api = 'https://secure-beyond-80954.herokuapp.com';
    request
      // Pass question.id as ? in ? method.
      .get(api+'/questions/'+ this.props.linkId)
      // Pass token as prop in set method
      .set('Authorization', `Token token=${this.props.token}`)
      .end((err,res) => {
        if (err) {
          console.error(err);
        } else {
          let requestResponse = JSON.parse(res.text);
          this.setState({
            questionId: requestResponse.question.id,
            title: requestResponse.question.title,
            language: requestResponse.question.language,
            question: requestResponse.question.body
          });
        }
      })

    request
      .get(api+'/questions/'+this.props.linkId+'/answers')
      .set('Authorization', `Token token=${this.props.token}`)
      .end((err,res)=>{
        if (err){
          console.error(err);
        } else{
          console.log(typeof JSON.parse(res.text));
          console.log(JSON.parse(res.text));
          let requestResponse = JSON.parse(res.text);
          console.log(requestResponse.question.answers);
          this.setState({
            history: requestResponse.question.answers
          })
        }
      })
  }
  render() {
    let allAnswers = this.state.history;
    let answers = allAnswers.map((answers)=>{
      console.log('Times mapped through answers: '+answers.id);
      return(<Answers key={answers.id} data={answers} />)
    });
    let locked = false;
    let editButton = null;
    // Determines if the question can be edited.  The only time editing is allowed is if the username of the person accessing the page is the same as the person who authored the question and there is no history of answers for this question
    if (this.state.history.length > 0 || this.state.username !== this.state.questionAuthor){
      locked = true;
    } else {
      editButton = <input type="Submit" value="Submit"/>
    }

    return (
      <div className="body-component">
          <div className="questionpage-component" >
            <form onSubmit={this.handleSubmit}>
            <h1>Question Page</h1>
            <p>
              Title:
              <input type="text" id="title" onChange={this.handleTextChange} value={this.state.title} readOnly={locked} />
            </p>
            <p>
              Language:
              <input type="text" id="language" onChange={this.handleTextChange} value={this.state.language} readOnly={locked} />
            </p>
            <p>
              Tags:
              <input type="text" id="tags" onChange={this.handleTextChange} value={this.state.tags} readOnly={locked} />
            </p>
            <p className="active-question-textarea">
              Question:
              <textarea onChange={this.handleTextChange} id="question" value={this.state.question} readOnly={locked} />
            </p>
              {editButton}
            </form>
              {answers}
            <YourAnswer onChange={this.handleTextChange} value={this.state.answer} token={this.props.token}/>
          </div>
      </div>
    )
  }
}
