import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-component">

        <article className="project-flex-container">
          <div className="project-flex-item-intro project-timeline">
            <div className="project-date">Aug 2018</div>
          </div>
          <div className="project-flex-item-content">
            <div className="project-introduction">
              <h3>My Hearthstone Addiction</h3>
              <h5>Commitment Quantifier</h5>
            </div>
            <div className="project-content">
              <p>MHA is an application that aims to quantify the sunk cost of your
                Hearthstone commitment in terms of time and money.</p>
              <ul className="project-details">
                <li>As The World Health Organization begins to recognize Video Game Addiction as an
                  offical mental health disorder I wanted to create an app to help individuals with their personal struggles.</li>
              </ul>
            </div>
            <img className="project-image" src="/assets/images/hstone-add.png" alt="hstone-addiction" />
            <div className="project-links">
              <a
                href="https://hstone-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
                      </a>
              <a href="https://github.com/JuliusDorfman/stone-lore.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
          <div className="project-flex-item-technologies">
            <ul className="technologies-list">
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-node"></i>
              </li>
            </ul>
          </div>
        </article>

        <hr />

        <article className="project-flex-container">
          <div className="project-flex-item-intro project-timeline">
            <div className="project-date">Jul 2018</div>
          </div>
          <div className="project-flex-item-content">
            <div className="project-introduction">
              <h3>News-From</h3>
              <h5>Headlines as Data</h5>
            </div>
            <div className="project-content">
              <p>News-From is an application that allows
                you to search headlines for keywords accross
                multiple different news organizations and see
              who is talking about what.</p>
              <ul className="project-details">
                <li>I wanted to build a project where the user
                  could manipulate headlines as data to generate
                  a larger picture and draw personal conclusions.</li>
              </ul>
            </div>
            <img className="project-image" src="/assets/images/news-from-screen.png" alt="news-from-display" />
            <div className="project-links">
              <a
                href="https://news-from.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
                      </a>
              <a href="https://github.com/JuliusDorfman/news-from.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
          <div className="project-flex-item-technologies">
            <ul className="technologies-list">
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-node"></i>
              </li>
            </ul>
          </div>
        </article>

        <hr />

        <article className="project-flex-container">
          <div className="project-flex-item-intro project-timeline">
            <div className="project-date">Jun 2018</div>
          </div>
          <div className="project-flex-item-content">
            <div className="project-introduction">
              <h3>imagEdits</h3>
              <h5>Online Image Editor</h5>
            </div>
            <div className="project-content">
              <p>imagEdits (pronounced Image Edits) is a simple browser based image
                editor.
              </p>
              <ul className="project-details">
                <li>I wanted to create a very simple, functional app,
                  aesthetically pleasing, and W3C Standard compliant.</li>
              </ul>
            </div>
            <img className="project-image" src="/assets/images/imagedits-screen.png" alt="imagedits" />
            <div className="project-links">
              <a
                href="https://juliusdorfman.github.io/imagEdits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
                      </a>
              <a href="https://github.com/JuliusDorfman/imagEdits.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
          <div className="project-flex-item-technologies">
            <ul className="technologies-list">
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-npm"></i>
              </li>
            </ul>
          </div>
        </article>

        <hr />

        <article className="project-flex-container">
          <div className="project-flex-item-intro project-timeline">
            <div className="project-date">March 2018</div>
          </div>
          <div className="project-flex-item-content">
            <div className="project-introduction">
              <h3>Crystal Game</h3>
              <h5>A "Fun" Numbers Game</h5>
            </div>
            <div className="project-content">
              <p>Crystal Game is a browser based number addition game with a fun theme and simple premise.
              </p>
              <ul className="project-details">
                <li>This was my very first application.</li>
                <li>I can't wait to replace this with something more impressive</li>
              </ul>
            </div>
            <img className="project-image" src="/assets/images/crystal-game-screen.png" alt="crystal-game" />
            <div className="project-links">
              <a
                href="https://crystal-numbers.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK
                      </a>
              <a href="https://github.com/JuliusDorfman/crystal-numbers"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
          <div className="project-flex-item-technologies">
            <ul className="technologies-list">
              <li>
                <i className="fab fa-js-square"></i>
              </li>
              <li>
                <i className="fab fa-npm"></i>
              </li>
            </ul>
          </div>
        </article>

        {/*
        <div className="portfolio-container">
          <div className="projects-container">
            {/* <div className="project-wrapper">
              <div className="project-overlay">
                <div className="project-center">
                  <h3>News-From</h3>
                  <a className="blog-link">Blog</a>
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
                      LINK
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
                      LINK
                      </a>
                    <a href="https://github.com/JuliusDorfman/imagEdits.git"
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
                  <h3>My Hearthstone Addiction</h3>
                  <p>Commitment Quantifier</p>
                  <div className="project-technology-icons">
                    <i className="fab fa-react"></i>
                    <i className="fab fa-node"></i>
                  </div>
                  <div className="project-links">
                    <a
                      href="https://hstone-app.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINK
                      </a>
                    <a href="https://github.com/JuliusDorfman/stone-lore.git"
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
                      LINK
                      </a>
                    <a href="https://github.com/JuliusDorfman/liri-node-app"
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
                      LINK
                      </a>
                    <a href="https://github.com/JuliusDorfman/crystal-numbers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >SRC</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
*/}
      </div>
    )
  }
}
