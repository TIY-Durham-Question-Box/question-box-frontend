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
          <h1>Home</h1>
          <button className="homepage-ask-a-question-button"><Link to="/addquestion">Add a Question</Link></button>
        </div>
      <Footer />
      </div>
    )
  }
}
