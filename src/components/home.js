import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="home-component" >
          <h1 className="homepage-welcome-header">Welcome to Question Box!</h1>
            <div className="homepage-container">
              <div className="popular-tags-homepage">
                <h1>Popular Tags:</h1>
              </div>
              <div className="recently-asked-questions-homepage">
                <button className="homepage-ask-a-question-button"><Link to="/addquestion">Add a Question</Link></button>
                <h1>HERE IS A LIST OF QUESTIONS</h1>
              </div>
            </div>
        </div>
      <Footer />
      </div>
    )
  }
}
