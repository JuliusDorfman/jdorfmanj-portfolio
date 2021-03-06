import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
          <div className="contact-form-wrapper">
            <form className="contact-form" method="POST" action="email.php">
              <div className="contact-info">
                <input id="name" type="text" name="name" placeholder="&nbsp;&nbsp;&nbsp;Full Name" required />
                <input id="email" type="email" name="email" placeholder="&nbsp;&nbsp;&nbsp;Email" required />
              </div>
              <div className="contact-message-wrapper">
                <textarea id="message" type="text" name="message" placeholder="&nbsp;&nbsp;&nbsp;Message" required></textarea>
              </div>
              <input type="submit" name="submit" value="Send" id="send-btn" />
            </form>
            <h3>{}</h3>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
