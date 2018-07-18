import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <nav>
            <ul class="nav-menu">
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="../About">About</a>
              </li>
              <li>
                <a href="../Blog.html">Blog</a>
              </li>
              <li>
                <a href="../Contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
