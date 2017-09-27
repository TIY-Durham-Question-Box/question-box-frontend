import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import request from 'superagent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testdata: []
    };

  }
  componentWillMount(){
    request
      .get('https://secure-beyond-80954.herokuapp.com/questions')
      .end((err,res) => {
        console.log(err);
        console.log(res.text);
        this.setState({testdata: res.text});
      })

  }
  render() {
    // console.log(this.state.testdata);
    let allQuestions = this.state.testdata;
    let questionLink = allQuestions.map((questionLink) =>{
      return(<button className="homepage-ask-a-question-button"><Link to="/viewquestion">View a Question</Link></button>)
    });


    return (
      <div className="body-component">
      <div className="home-component" >
        <h1 className="homepage-welcome-header">Welcome to Question Box!</h1>
        <button className="homepage-ask-a-question-button"><Link to="/login">LOGIN TEST</Link></button>
          <div className="homepage-container">
            <div className="popular-tags-homepage">
              <h3>Popular Tags:</h3>
            </div>
            <div className="recently-asked-questions-homepage">
              <h3>Recently Asked Questions:</h3>
              <button className="homepage-ask-a-question-button"><Link to="/addquestion">Ask a Question!</Link></button>
              {questionLink}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
