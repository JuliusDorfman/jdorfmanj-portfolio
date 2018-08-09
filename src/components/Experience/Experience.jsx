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
                <li>
                  <p>HTML5</p>
                </li>
                <li>
                  <p>CSS3</p>
                </li>
                <li>
                  <p>JAVASCRIPT</p>
                </li>
                <li>
                  <p>REACT</p>
                </li>
                <li>
                  <p>NODE</p>
                </li>
              </ul>
            </div>
            <div className="about-me-content-column">
              <h3>SKILLSET</h3>
              <ul>
                <li>
                  <p>UI/UX</p>
                </li>
                <li>
                  <p>RESPONSIVE DESIGN</p>
                </li>
                <li>
                  <p>PHOTOSHOP</p>
                </li>
                <li>
                  <p>API DEVELOPMENT</p>
                </li>
              </ul>
            </div>
            <div className="about-me-content-column">
              <h3>HOBBIES</h3>
              <ul>
                <li>
                  <p>LIFTING HEAVY STUFF</p>
                </li>
                <li>
                  <p>FISHKEEPING</p>
                </li>
                <li>
                  <p>MANGA & ANIME</p>
                </li>
                <li>
                  <p>BEER</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
