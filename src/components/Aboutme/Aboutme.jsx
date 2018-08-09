import React, { Component } from 'react';
import './Aboutme.css';

export default class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme-component">
        <div className="aboutme-container" >
          <div className="digital-card">
            <div className="card-content">
              <div className="card-initials-wrapper">
                {/* <div className="card-initials-background" /> */}
                <p className="card-initials">
                  J
                  </p>
                <p className="card-initials">
                  D
                </p>
              </div>
              <div className="card-name">
                <p>
                  Julius
              </p>
                <p>
                  Dorfman
              </p>
                <p className="tagline">
                  Web Developer
              </p>
              </div>
            </div>
            <div className="line-wrappers">
              <div className="blue-line-flavor"></div>
              <div className="orange-line-flavor"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
