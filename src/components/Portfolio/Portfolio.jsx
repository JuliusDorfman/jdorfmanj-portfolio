import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-component">

        <div className="portfolio-container">
          <div className="projects-container">
            <div className="project-group">
              <div className="project-wrapper">
                <div className="project-overlay">
                  <div className="project-center">
                    <h3>News-From</h3>
                    <p>
                      Search the headlines
                      </p>
                    <div className="project-technology-icons">
                      <i className="fab fa-react"></i>
                      <i className="fab fa-node"></i>
                    </div>
                    <div className="project-links">
                      <a
                        href="https://news-from.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-link"></i>
                      </a>
                      <a href="https://github.com/JuliusDorfman/news-from.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >SRC</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-wrapper">
                <div className="project-overlay">
                  <div className="project-center">
                    <h3>imagEdits</h3>
                    <p>Online Image Editor</p>
                    <div className="project-technology-icons">
                      <i className="fab fa-react"></i>
                      <i className="fab fa-npm"></i>
                    </div>
                    <div className="project-links">

                      <a
                        href="https://juliusdorfman.github.io/imagEdits/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-link"></i>
                      </a>
                      <a href="https://github.com/JuliusDorfman/imagEdits.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >SRC</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-group">
              <div className="project-wrapper">
                <div className="project-overlay">
                  <div className="project-center">
                    <h3>Crystal Game</h3>
                    <p>A "Fun" numbers game</p>
                    <div className="project-technology-icons">
                      <i className="fab fa-js-square"></i>
                      <i className="fab fa-npm"></i>
                    </div>
                    <div className="project-links">

                      <a
                        href="https://crystal-numbers.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-link"></i>
                      </a>
                      <a href="https://github.com/JuliusDorfman/crystal-numbers"
                        target="_blank"
                        rel="noopener noreferrer"
                      >SRC</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-wrapper">
                <div className="project-overlay">
                  <div className="project-center">
                    <h3>Liri-Bot</h3>
                    <p>Twitter, Spotify, OMDB bot</p>
                    <div className="project-technology-icons">
                      <i className="fab fa-node"></i>
                      <i className="fab fa-npm"></i>
                    </div>
                    <div className="project-links">

                      <a
                        href="https://github.com/JuliusDorfman/liri-node-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-link"></i>
                      </a>
                      <a href="https://github.com/JuliusDorfman/liri-node-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >SRC</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
