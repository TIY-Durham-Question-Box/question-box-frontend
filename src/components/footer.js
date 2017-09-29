import React, { Component } from 'react';
import '../styles/App.css';

export default class Footer extends Component {
  render() {
    return(
      <div className="centered footer-wrapper">
        <div className="footer-component">
          Question Box, Ltd.
        </div>
        <div className="footer-component">
          Copyright 2017 under MIT liscense
        </div>
        <div className="footer-component">
          Cookies Disclaimer
        </div>
        <div className="footer-component">
          Terms of Service
        </div>
        <div className="footer-component">
          Contact Us
        </div>
      </div>
    )
  }
}
