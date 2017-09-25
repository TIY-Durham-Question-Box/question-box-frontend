import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './components/home.js';
import LoginRegistrationPage from './components/loginregistrationpage.js';
import QuestionFrom from './components/questionfrom.js';
import QuestionPage from './components/questionpage.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <BrowserRouter>
    <Switch>
      <Route path="/index" component={Home}/>
      <Route path="/login" component={LoginRegistrationPage} />
      <Route path="/addquestion" component={QuestionFrom} />
      <Route path="/viewquestion" component={QuestionPage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
