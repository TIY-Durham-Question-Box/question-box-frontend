import React, { Component } from 'react';
import '../styles/App.css';
import Home from './home.js';
import QuestionFrom from './questionfrom.js';
import QuestionPage from './questionpage.js';
import LoginRegistrationPage from './loginregistrationpage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
