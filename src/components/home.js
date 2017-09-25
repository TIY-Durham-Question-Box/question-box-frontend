import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
import Footer from './footer.js';

export default class Home extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="home-component" >
        </div>
      <Footer />
      </div>
    )
  }
}
