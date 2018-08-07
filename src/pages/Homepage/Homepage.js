import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Homepage.css';
// import Contact from '../Contact/Contact';


export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.state.showContact) {
      this.setState({ showContact: false })
    } else {
      this.setState({ showContact: true })
    }
  }

  render() {

    return (
      <div>

        <div style={{ height: 95 + "vh" }}>

          <Header />

          <div className="container homepage-landing">
            <div className="landing-intro">
              <h1>Julius G. Dorfman</h1>
              <ul className="work-intro-flavor">
                <li>
                  Design,
                </li>
                <li>
                  Development,
                </li>
                <li>
                  Passion, Creativity.
                </li>
              </ul>
            </div>
            <div className="work-intro-details-wrapper">
              <ul className="work-intro-details">
                <li>
                  <p>I create <span className="orange-highlight">quality</span> Websites and Applications with care and the utmost attention.</p>
                </li>
                <li>
                  <p>Each product built using the most <span className="orange-highlight">up-to-date</span> full-stack technologies.</p>
                </li>
                <li>
                <p>Let's create some <span className="orange-highlight">engaging</span> content.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="content-grid">

            <div className="project" id="proj-1">
              <div className="project-overlay">
                <div className="project-center">
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

            <div className="project" id="proj-2">
              <div className="project-overlay">
                <div className="project-center">
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

            <div className="project" id="proj-3">
              <div className="project-overlay">
                <div className="project-center">
                  <a
                    href="https://crystal-numbers.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>Crystal Game</h3>
                    <i className="fas fa-link"></i>
                  </a>
                  <p>A "Fun" numbers game</p>
                </div>
              </div>
            </div>

            <div className="project" id="proj-4">
              <div className="project-overlay">
                <div className="project-center">
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
          <div className="page-detail">
            <p>Have a project? I can help!</p>
            <p>Contact<i onClick={this.handleClick} className="contact-arrow far fa-arrow-alt-circle-right"></i></p>
            {
              this.state.showContact
                ?
                <div className="contact-info">
                  <p>Email: JuliusDorfman@gmail.com</p>
                  <p>Phone: 858-345-0259</p>
                </div>
                :
                <span />
            }
          </div>
        </div>
        <Footer />
      </div >
    )
  }
}


