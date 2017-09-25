import React, { Component } from 'react';
import '../styles/footer-styles.css';

export default class Footer extends Component {
  render() {
    return(
      <div className="footer-component" >
        <div className="footer-component-a">
          Question Box, Ltd.
        </div>
        <div className="footer-component-b">
          Copyright 2017 under MIT liscense
        </div>
        <div className="footer-component-c">
          Cookies Disclaimer
        </div>
        <div className="footer-component-d">
          Terms of Service
        </div>
        <div className="footer-component-e">
          Contact Us
        </div>
      </div>
    )
  }
}
