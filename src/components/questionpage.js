import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';

export default class QuestionPage extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="questionpage-component" >
        <h1>Question Page</h1>
        </div>
      <Footer />
      </div>
    )
  }
}
