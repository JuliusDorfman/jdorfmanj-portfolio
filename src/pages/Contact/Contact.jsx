import React, { Component } from 'react';
import Header from '../../components/Header';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>

        <Header />

        <div className="container">
          <div className="contact-intro">
            <h1>Get in Touch!</h1>
          </div>
        </div>

        <div className="container">
          <div className="contact-wrapper">
            <form className="contact-form" method="GET" name="contact-me">
              <div className="contact-info">
                <input id="contact-full-name" type="text" name="full-name" placeholder="&nbsp;&nbsp;&nbsp;Full Name" />
                <input id="contact-email" type="text" name="email" placeholder="&nbsp;&nbsp;&nbsp;Email" />
              </div>
              <div className="contact-message-wrapper">
                <textarea id="contact-message" type="text" name="message" placeholder="&nbsp;&nbsp;&nbsp;Message" ></textarea>
              </div>
              <input type="submit" value="Send" id="send-btn" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
