import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer>
          <div className="container">

            <p className="footer-copywrite">&copy; <time>2018</time> Julius G. Dorfman</p>

            <ul className="ul-social">
              <li className="li-social-links">
                <a
                  className="social"
                  href="https://github.com/JuliusDorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="li-social-links">
                <a
                  className="social"
                  href="https://www.linkedin.com/in/juliusgdorfman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li className="li-social-links">
                <a
                  className="social"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/assets/docs/JuliusDorfman_Resume.doc"
                  download="JuliusDorfman_Resume.doc"
                >
                  <i className="far fa-file-word" />
                </a>
              </li>
            </ul>

          </div>
        </footer>
      </div>
    )
  }
}
