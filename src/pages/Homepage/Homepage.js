import React, { Component } from 'react';
import Experience from '../../components/Experience';
import Portfolio from '../../components/Portfolio';
import Aboutme from '../../components/Aboutme';
import './Homepage.css';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: false,
      showExperience: false,
      showAboutme: true
    }
    this.handleRender = this.handleRender.bind(this);
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
        this.setState({ showAboutme: false })
      } else {
        this.setState({ showPortfolio: false });
        this.setState({ showAboutme: true })
      }
    }

    if (e.target.getAttribute("value") === "experience") {
      if (this.state.showExperience === false) {
        this.setState({ showExperience: true });
        this.setState({ showPortfolio: false })
        this.setState({ showAboutme: false })
      } else {
        this.setState({ showExperience: false });
        this.setState({ showAboutme: true })
      }
    }

    if (e.target.getAttribute("value") === "aboutme") {
      if (this.state.showAboutme === false) {
        this.setState({ showAboutme: true })
        this.setState({ showExperience: false });
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
                  <p>Design</p>
                </li>
                <li>
                  <p>Development</p>
                </li>
                <li>
                  <p>Passion & Creativity</p>
                </li>
              </ul>
            </div>
            <div className="bio-bar-portfolio">
              <h3>Portfolio</h3>
              <p>I am a Full-Stack Developer with a true <span className="orange-highlight">passion</span> for creating. I strive to be an individual who is appreciated for his work ethic and <span className="blue-highlight">flexibility</span>.
                My mark as a developer is <span className="blue-highlight">integrity</span> and <span className="orange-highlight">quality</span>.
              </p>
            </div>

            <footer>
              <h3>Contact Me</h3>
              <ul className="footer-info">
                <li>LOCATION:</li><li>California</li>
                <li>PHONE:</li><li>(858) 345-0259</li>
                <li>EMAIL: </li><li>JuliusDorfman@gmail.com</li>
              </ul>
            </footer>
          </div>
        </div>

        <div className="homepage-content-wrapper">
          <div className="homepage-sliding-door" />
          <div className="homepage-content">
            <div className="content-navbar-wrapper">
              <ul className="content-navbar">
                <li onClick={this.handleRender} value="portfolio">PORTFOLIO</li>
                <li onClick={this.handleRender} value="experience">EXPERIENCE</li>
                <li onClick={this.handleRender} value="aboutme">ABOUT ME</li>
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
            {
              this.state.showAboutme
                ?
                <Aboutme />
                :
                <span />
            }

          </div>
        </div>

      </div >
    )
  }
}


