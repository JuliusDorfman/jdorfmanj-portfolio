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
      top: 700,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div>

        <div style={{ height: 95 + "vh" }}>

          <Header />

          <div className="container">

            <div className="landing-intro">
              <h1>Julius G. Dorfman</h1>
              <p className="work-intro">
                Simplicity is Beauty<i className="far fa-smile-wink work-intro-flavor"></i>
              </p>
            </div>
          </div>

        </div>

        {/* Utilize Flex Box to create fully responsive project cards.  */}
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
              <p>Contact<a href="../Contact"><i class="contact-arrow far fa-arrow-alt-circle-right"></i></a></p>
            </div>
        </div>
        <Footer />
      </div >
    )
  }
}


