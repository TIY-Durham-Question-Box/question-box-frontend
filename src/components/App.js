import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegistrationPage from './loginregistrationpage.js';
import QuestionForm from './questionform.js';
import QuestionPage from './questionpage.js';
import Home from './home.js';
import Header from './header.js';
import Footer from './footer.js';
import React, { Component } from 'react';
import '../styles/App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.reroute = this.reroute.bind(this);
  }
  reroute(){
    console.log("boom");
  }
  render() {
    return (
      <div>
      <Header reroute={this.reroute}/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginRegistrationPage} />
          <Route path="/addquestion" component={QuestionForm} />
          <Route path="/viewquestion" component={QuestionPage} />
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}
