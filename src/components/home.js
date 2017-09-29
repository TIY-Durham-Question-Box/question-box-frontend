import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import request from 'superagent';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      testdata: false
    };
  }
  componentWillMount(){
    request
      .get('https://secure-beyond-80954.herokuapp.com/questions')
      .end((err,res) => {
        this.setState({testdata: JSON.parse(res.text)});
      })
  }
  render() {
    let allQuestions = this.state.testdata;
    let questionLink;
    console.log(allQuestions);
    if(allQuestions){
      questionLink = allQuestions.questions.map((questionLink) =>{
        return(
          <button key={questionLink.id} id={questionLink.id} className="homepage-ask-a-question-button" onClick={this.props.setLinkId}>
            <Link to={"/questions/"+questionLink.id} id={questionLink.id}>
              {questionLink.title}
            </Link>
          </button>)
      })
    } else {
      questionLink = () => {
        return(<p>questionLink is missing</p>);
      }
    };
    return (
      <div className="body-component">
        <div className="home-component" >
          <h1 className="centered homepage-welcome-header">
            Welcome to Question Box!
          </h1>
          <div className="homepage-container">
            <div className="popular-tags-homepage">
              <h3 className="centered">
                Popular Tags:
              </h3>
            </div>
            <div className="recently-asked-questions-homepage">
              <h3 className="centered">
                Recently Asked Questions:
              </h3>
              <button className="homepage-ask-a-question-button">
                <Link to="/addquestion">
                  Ask a Question!
                </Link>
              </button>
              {questionLink}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
