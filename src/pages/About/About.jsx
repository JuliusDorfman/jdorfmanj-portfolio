import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './About.css';

export default class About extends Component {



  render() {
    return (
      <div>

        <Header />

        <div className="content">

          <div className="container">
            <div className="about-me-intro">
              <h1>About Me!</h1>
            </div>
          </div>

          <div className="container">
            <div className="about-me">
              <p>Hi, I'm Julius. Developer most of the time. Cool Nerd with an active lifestyle the rest of the time.</p>
              <p>Let's build something Nice.</p>
            </div>
          </div>

          <div className="page-detail">

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
