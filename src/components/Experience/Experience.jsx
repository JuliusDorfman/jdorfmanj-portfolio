import React, { Component } from 'react'
import './Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="experience-component">
        <div className="experience-container">
          <div className="skills-container"></div>
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
                  <p>RESPONSIVE DESIGN</p>
                  <span />
                </li>
                <li>
                  <p>PHOTOSHOP</p>
                  <span />
                </li>
                <li>
                  <p>API DEVELOPMENT</p>
                </li>
                <span />
                <li>
                  <p></p>
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
      </div>
    )
  }
}
