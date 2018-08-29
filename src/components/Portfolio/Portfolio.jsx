import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {


  normal(e) {
    let footerElement = document.getElementsByTagName('footer')[0];
    footerElement.style.transform = "scale(1, 1)";
  }

  componentDidMount(e) {
    let contactElement = document.getElementsByClassName('click-contact')[0];
    let footerElement = document.getElementsByTagName('footer')[0];

    contactElement.addEventListener('click', () => {
      footerElement.style.transform = "scale(2, 2)";
      window.setTimeout(this.normal, 500)
    })
  }

  render() {
    return (
      <div className="portfolio-component">

        <div className="project-introduction">
          <h5 className="pitch-title">Looking for a Full-Stack Developer?</h5>
          <p className="pitch-contact">
            <a>
              <span className="click-contact">&nbsp;Contact me&nbsp;</span>
            </a>
            &nbsp;&nbsp;I'll always respond to you within 24 hours.</p>
          <p className="pitch-contact"></p>
        </div>
        <div className="project-content"></div>
        <div className="project-links"></div>

        <hr />

        <article className="project-container">

          <div className="project-content">
            <div className="project-details">
              <p className="small-date">Aug 2018</p>
              <h2>My Hearthstone Addiction</h2>

              <h3>WHAT IS IT?</h3>
              <p>This is an application that aims to quantify the sunk cost of your
                Hearthstone commitment in terms of time and money.</p>

              <h3>WHY?</h3>
              <p>As The World Health Organization begins to recognize Video Game Addiction as an
                  offical mental health disorder I wanted to create an app to help individuals with their personal struggles.</p>
            </div>
          </div>
          <div className="image-container">
            <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/hearthstone4.png" alt="hstone-addiction" />
            </div>
            {/* <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/hearthstone2.png" alt="hstone-addiction" />
            </div> */}

            {/* <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/hearthstone3.png" alt="hstone-addiction" />
            </div> */}
          </div>
          <div className="links-container">
            <div className="project-links">
              <a
                href="https://hstone-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
                      </a>
              <a href="https://github.com/JuliusDorfman/stone-lore.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>

        </article>

        <hr />

        <article className="project-container">

          <div className="project-content">
            <div className="project-details">
              <p className="small-date">Jul 2018</p>
              <h2>News-From</h2>

              <h3>WHAT IS IT?</h3>
              <p>This is an application that allows
              you to search headlines for keywords accross
              multiple different news organizations and see
              who is talking about what.</p>

              <h3>WHY?</h3>
              <p>I wanted to build a project where the user
                could manipulate headlines as data to generate
                  a larger picture and draw personal conclusions.</p>
            </div>
          </div>
          <div className="image-container">
            <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/news-from-screen.png" alt="news-from-display" />
            </div>

            {/* <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/news-from2.png" alt="hstone-addiction" />
            </div> */}
          </div>
          <div className="links-container">

            <div className="project-links">
              <a
                href="https://news-from.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
                      </a>
              <a href="https://github.com/JuliusDorfman/news-from.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
        </article>

        <hr />

        <article className="project-container">
          <div className="project-content">
            <div className="project-details">
              <p className="small-date">Jun 2018</p>
              <h2>imagEdits</h2>

              <h3>WHAT IS IT?</h3>
              <p>(Pronounced Image Edits) is a simple browser based image
                editor.</p>

              <h3>WHY?</h3>
              <p>I wanted to create a very simple, functional app,
                  aesthetically pleasing, and W3C Standard compliant.</p>
            </div>
          </div>

          <div className="image-container">
            <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/imagedits-screen.png" alt="imagedits" />
            </div>

            {/* <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/imagedits2.png" alt="imagedits2" />
            </div> */}
          </div>
          <div className="links-container">

            <div className="project-links">
              <a
                href="https://juliusdorfman.github.io/imagEdits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
                      </a>
              <a href="https://github.com/JuliusDorfman/imagEdits.git"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
        </article>

        <hr />



        <article className="project-container">
          <div className="project-content">
            <div className="project-details">
              <p className="small-date">Mar 2018</p>
              <h2>Crystal Game</h2>

              <h3>WHAT IS IT?</h3>
              <p>This is a browser based number addition game with a fun theme and simple premise.</p>

              <h3>WHY?</h3>
              <p>This was my very first application. I can't wait to replace this with something more impressive.</p>
            </div>
          </div>

          <div className="image-container">
            <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/crystal-game-screen.png" alt="crystal-game" />
            </div>

            {/* <div className="project-image-wrapper">
              <img className="project-image" src="/assets/images/crystals2.png" alt="imagedits2" />
            </div> */}
          </div>

          <div className="links-container">
            <div className="project-links">
              <a
                href="https://crystal-numbers.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
                      </a>
              <a href="https://github.com/JuliusDorfman/crystal-numbers"
                target="_blank"
                rel="noopener noreferrer"
              >SRC</a>
            </div>
          </div>
        </article>

      </div >
    )
  }
}
