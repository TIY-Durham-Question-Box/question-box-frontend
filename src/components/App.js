import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegistrationPage from './loginregistrationpage.js';
import QuestionForm from './questionform.js';
import QuestionPage from './questionpage.js';
import Home from './home.js';
import Header from './header.js';
import Footer from './footer.js';
import React, { Component } from 'react';
import cookies from 'react-cookies';
import '../styles/App.css';


export default class App extends Component {
  constructor() {
   super();
   this.state = {
     token: null,
     linkId: null
   }
   this.setLinkId=this.setLinkId.bind(this)
 }
 setLinkId=(e)=>{
   console.log("e.target.id = " + e.target.id);
   this.setState({linkId: e.target.id});
 }
 componentWillMount() {
   this.setState({token: 'GmV3P9ny7gqG3KmQgM9Sov1D'});
 }
 // setToken(token) {
 //   this.setState({token: token});
 //   cookie.save('token', token);
 // }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="second">
            <nav>
              <Header/>
            </nav>
            <Switch>
              <Route path="/login" component={LoginRegistrationPage} />
              <Route path="/addquestion" render={(props)=>(<QuestionForm token={this.state.token} />)} />
              <Route path="/questions/" render={(props) => (<QuestionPage token={this.state.token} linkId={this.state.linkId} />)} />
              <Route path="/" render={(props) => (<Home setLinkId={this.setLinkId} />)} />
            </Switch>
          </div>
        </BrowserRouter>
      <Footer />
      </div>
    );
  }
}
