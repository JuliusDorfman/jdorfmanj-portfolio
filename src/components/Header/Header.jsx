import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLinks: false
    }
    // this.handleHover = this.handleHover.bind(this)
  }

  // handleHover(e) {
  //   let el = document.getElementsByClassName('header-mylinks')[0].childNodes;
  //   if (!this.state.showLinks) {
  //     for (let i = 0; i < el.length; i++) {
  //       let element = el[i].childNodes[0].childNodes[0]
  //       element.style.color = "gray";
  //       this.setState({ showLinks: true })
  //     }
  //   } else {
  //     for (let i = 0; i < el.length; i++) {
  //       let element = el[i].childNodes[0].childNodes[0]
  //       element.style.color = "white";
  //       this.setState({ showLinks: false })
  //     }
  //   }
  // }

  render() {
    return (
      <header>
        <div className="container">
          <div className="float-left">
            <i className="header-icon far fa-square"></i>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="../About">About</a>
            </li>
            {/* <li>
              <a href="../Contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </header>
    )
  }
}

// <div className="header-contact">
// <i className="header-icon far fa-square" onMouseOver={this.handleHover}></i>
// </div>
// <ul className="header-mylinks">
// <li>
//   <a
//     className=""
//     href="https://github.com/JuliusDorfman"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <i className="fab fa-github" />
//   </a>
// </li>
// <li>
//   <a
//     className=""
//     href="https://www.linkedin.com/in/juliusgdorfman"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <i className="fab fa-linkedin" />
//   </a>
// </li>
// <li>
//   <a
//     className=""
//     target="_blank"
//     rel="noopener noreferrer"
//     href="/assets/docs/JuliusDorfman_Resume.doc"
//     download="JuliusDorfman_Resume.doc"
//   >
//     <i className="fas fa-file"></i>
//   </a>
// </li>
// </ul>