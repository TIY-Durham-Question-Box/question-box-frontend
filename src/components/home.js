import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      questionsdata: false
    }
  }
  fetchData = () => {
    var fetchConfig = { method: 'GET',
                  mode: 'cors',
                  cache: 'default' };
    fetch(`https://secure-beyond-80954.herokuapp.com/questions`, fetchConfig).then(results => {
        return results.json();
      }).then(data => {
        this.setState({ questionsdata:data.questions });
    })
  }
  componentWillMount(){
    this.fetchData();
  }
  render() {
    let questions = false;
    if (this.state.questionsdata){
      questions = this.state.questionsdata.map((x, i) => {
        console.log(x);
        return(
          <div key={x}>
            <p>{x.title}</p>
          </div>
        )
      })
    }
    // console.log(this.state.testdata);
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
              {questions ? questions : ""}
              <button className="homepage-ask-a-question-button"><Link to="/addquestion">Ask a Question!</Link></button>
              <button className="homepage-ask-a-question-button"><Link to="/viewquestion">View a Question</Link></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
