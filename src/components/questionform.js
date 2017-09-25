import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';

export default class QuestionForm extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="questionform-component" >
        <h1>Question Form</h1>
        </div>
      <Footer />
      </div>
    )
  }
}
