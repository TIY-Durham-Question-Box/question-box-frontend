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
          <h1>Welcome to Question Box!</h1>
            <div>
              <div className="popular-tags-homepage">
              </div>
              <div className="recently-asked-questions-homepage">
                <button className="homepage-ask-a-question-button"><Link to="/addquestion">Add a Question</Link></button>
              </div>
            </div>
        </div>
      <Footer />
      </div>
    )
  }
}
