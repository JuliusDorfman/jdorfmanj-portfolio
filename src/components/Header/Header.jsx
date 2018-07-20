import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(e) {
    let el = document.getElementsByClassName('header-mylinks')[0].childNodes;

    for (let i = 0; i < el.length; i++) {
      let element = el[i].childNodes[0].childNodes[0]
      element.style.color = "gray";
    }
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="header-contact">
            <div className="header-icon-wrapper" onMouseOver={this.handleHover}>
              <i className="header-icon far fa-square"></i>
            </div>
            <ul className="header-mylinks">
              <li>
                <a
                  className=""
                  href="https://github.com/JuliusDorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className=""
                  href="https://www.linkedin.com/in/juliusgdorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/assets/docs/JuliusDorfman_Resume.doc"
                  download="JuliusDorfman_Resume.doc"
                >
                  <i className="fas fa-file"></i>
                </a>
              </li>
            </ul>
          </div>
          <nav>
            <ul className="nav-menu">
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="../About">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
