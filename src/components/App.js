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
  fetchData = () => {
    var fetchConfig = { method: 'GET',
                  mode: 'cors',
                  cache: 'default' };
    fetch(`https://secure-beyond-80954.herokuapp.com/questions`, fetchConfig).then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
    })
  }
  render() {
    this.fetchData();
    return (
      <div>
        <BrowserRouter>
          <div className="second">
            <nav>
              <Header/>
            </nav>
            <Switch>
              <Route path="/login" component={LoginRegistrationPage} />
              <Route path="/addquestion" component={QuestionForm} />
              <Route path="/viewquestion" component={QuestionPage} />
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      <Footer />
      </div>
    );
  }
}
