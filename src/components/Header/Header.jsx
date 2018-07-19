import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
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
