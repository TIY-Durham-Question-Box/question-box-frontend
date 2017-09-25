import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home.js';
import LoginRegistrationPage from './components/loginregistrationpage.js';
import QuestionForm from './components/questionform.js';
import QuestionPage from './components/questionpage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <BrowserRouter>
    <Switch>
      <Route path="/index" component={Home}/>
      <Route path="/login" component={LoginRegistrationPage} />
      <Route path="/addquestion" component={QuestionForm} />
      <Route path="/viewquestion" component={QuestionPage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
