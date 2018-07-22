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
              <p>Hi, I'm Julius. Developer most of the time.</p>
              <p>Cool Nerd with an active lifestyle the rest of the time.</p>
              <p>Let's build something Nice.</p>
            </div>
          </div>

          <div className="about-me-profile-container">
              <img className="about-me-profile" src="/assets/images/AboutMe-Profile.jpg" alt="about-me-profile" />
          </div>

          <div className="container">
            <div className="about-me-content">
              <div className="about-me-content-column">
                <h3>KNOWLEDGE</h3>
                <ul>
                  <li className="about-me-list-item">
                    <p>HTML5</p>
                  </li>
                  <li>
                    <p>CSS3</p>
                    <span />
                  </li>
                  <li>
                    <p>JAVASCRIPT</p>
                    <span />
                  </li>
                  <li>
                    <p>REACT</p>
                    <span />
                  </li>
                  <li>
                    <p>NODE</p>
                    <span />
                  </li>
                </ul>
              </div>
              <div className="about-me-content-column">
                <h3>SKILLSET</h3>
                <ul>
                  <li>
                    <p>UI/UX</p>
                    <span />
                  </li>
                  <li>
                    <p>WEB DESIGN</p>
                    <span />
                  </li>
                  <li>
                    <p>PHOTOSHOP</p>
                    <span />
                  </li>
                </ul>
              </div>
              <div className="about-me-content-column">
                <h3>HOBBIES</h3>
                <ul>
                  <li>
                    <p>LIFTING HEAVY STUFF</p>
                    <span />
                  </li>
                  <li>
                    <p>FISHKEEPING</p>
                    <span />
                  </li>
                  <li>
                    <p>MANGA & ANIME</p>
                    <span />
                  </li>
                  <li>
                    <p></p>
                    <span />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="page-detail">
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}
