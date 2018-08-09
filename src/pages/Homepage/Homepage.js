import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Experience from '../../components/Experience';
import Portfolio from '../../components/Portfolio';
import './Homepage.css';
// import Contact from '../Contact/Contact';


export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: false,
      showExperience: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleRender = this.handleRender.bind(this);
  }

  handleClick(e) {
    if (this.state.showContact) {
      this.setState({ showContact: false })
    } else {
      this.setState({ showContact: true })
    }
  }

  handleRender(e) {
    let element = document.getElementsByClassName("content-navbar")[0].childNodes;
    element.forEach(item => {
      item.style.color = "rgba(50, 50, 50, 0.3)";
    })
    e.target.style.color = "rgba(50, 50, 50, 1)";

    if (e.target.getAttribute("value") === "portfolio") {
      if (this.state.showPortfolio === false) {
        this.setState({ showPortfolio: true });
        this.setState({ showExperience: false })
      } else {
        this.setState({ showPortfolio: false });
      }
    }

    if (e.target.getAttribute("value") === "experience") {
      if (this.state.showExperience === false) {
        this.setState({ showExperience: true });
        this.setState({ showPortfolio: false })
      } else {
        this.setState({ showExperience: false });
      }
    }
  }

  render() {
    return (
      <div className="homepage-component">

        <div className="bio-bar-wrapper">
          <div className="bio-bar">
            <div className="bio-bar-content">
              <h1>Julius G. Dorfman</h1>
              <h2>Web Developer</h2>
              <ul className="work-intro-flavor">
                <li>
                  Design
                </li>
                <li>
                  Development
                </li>
                <li>
                  Passion & Creativity
                </li>
              </ul>
            </div>
            <div className="bio-bar-portfolio">
              <h3>Portfolio</h3>
              <p>I am a Full-Stack Developer. </p>
            </div>

            <footer>
              <h3>Contact Me</h3>
              <ul className="footer-info">
                <li>DOB:</li><li>1991</li>
                <li>LOCATION:</li><li>California</li>
                <li>PHONE:</li><li>(858) 345-0259</li>
                <li>EMAIL: </li><li>JuliusDorfman@gmail.com</li>
              </ul>
            </footer>
          </div>
        </div>

        <div className="homepage-content-wrapper">
          <div className="homepage-content">

            <div className="content-navbar-wrapper">
              <ul className="content-navbar">
                <li onClick={this.handleRender} value="portfolio">PORTFOLIO</li>
                <li onClick={this.handleRender} value="experience">EXPERIENCE</li>
              </ul>
            </div>

            {
              this.state.showPortfolio
                ?
                <Portfolio />
                :
                <span />
            }
            {
              this.state.showExperience
                ?
                <Experience />
                :
                <span />
            }

          </div>
        </div>

      </div >
    )
  }
}


