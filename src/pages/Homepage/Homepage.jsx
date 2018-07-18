import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Homepage.css';


export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  click(e) {
    window.scroll({
      top: 650,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div>

        <Header />

        <div className="container">

          <div className="landing-intro">
            <h1>Julius G. Dorfman</h1>
            <p className="work-intro">
              Of the mind that in simplicity is beauty.
              <br />
              But complexity is fun.<i className="fas fa-grin-wink"></i>
            </p>
          </div>
          <span onClick={this.click.bind(this)}><i className="far fa-arrow-alt-circle-down scroll-down-button"></i></span>
        </div>

        <div className="content">

          <div className="portfolio">
            <div className="project-row">

              <div className="project-container">
                <div className="project" id="proj-1">
                  <div className="project-overlay">
                    <div className="container">
                      <a
                        href="https://news-from.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>News-From</h3>
                        <i className="fas fa-link"></i>
                      </a>
                      <p>
                        Search the headlines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="project" id="proj-3">
                  <div className="project-overlay">
                    <div className="container">
                      <a
                        href="https://crystal-numbers.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>Crystal Game</h3>
                        <i className="fas fa-link"></i>
                      </a>
                      <p>A "Fun" numbers game</p>

                      <img
                        src="/assets/images/crystal_ruby.png"
                        className="crystal-ruby"
                        alt="ruby"
                      />
                      <img
                        src="/assets/images/crystal_diamond.png"
                        className="crystal-diamond"
                        alt="diamond"
                      />
                      <img
                        src="/assets/images/crystal_sapphire.png"
                        className="crystal-sapphire"
                        alt="sapphire"
                      />
                      <img
                        src="/assets/images/crystal_emerald.png"
                        className="crystal-emerald"
                        alt="emerald"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-row">

              <div className="project-container">
                <div className="project" id="proj-2">
                  <div className="project-overlay">
                    <div className="container">
                      <a
                        href="https://juliusdorfman.github.io/imagEdits/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>imagEdits</h3>
                        <i className="fas fa-link"></i>
                      </a>
                      <p>Online Image Editor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-container">
                <div className="project" id="proj-4">
                  <div className="project-overlay">
                    <div className="container">
                      <a
                        href="https://github.com/JuliusDorfman/liri-node-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>Liri-Bot</h3>
                        <i className="fas fa-link"></i>
                      </a>
                      <p>Twitter, Spotify, OMDB bot</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="container">
            <div className="page-detail">
              <p>Enjoy This Beautiful Use of Whitespace</p>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}


