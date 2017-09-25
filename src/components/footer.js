import React, { Component } from 'react';
import '../styles/App.css';

export default class Footer extends Component {
  render() {
    return(
      <div className="footer-component" >
        <div>
          Question Box, Ltd.
        </div>
        <div>
          Copyright 2017 under MIT liscense
        </div>
        <div>
          Cookies Disclaimer
        </div>
        <div>
          Terms of Service
        </div>
        <div>
          Contact Us
        </div>
      </div>
    )
  }
}
