import React, { Component } from 'react'
import CircleChart from 'circle-chart'
import './Aboutme.css';

export default class AboutMe extends Component {

  componentDidMount() {
    new CircleChart({
      $container: document.getElementById('knowledge'),
      ringProportion: 0.42,
      tooltips: true,
      middleCircleColor: 'rgba(220, 220, 220, 1)',
      size: 100,
      background: 'rgba(20, 20, 20, 1)',
      definition: [
        { label: 'HTML5', name: 'html5', color: "rgb(225, 130, 80)", value: 5 },
        { label: 'CSS3', name: 'css3', color: "rgb(rgb(50, 50, 50)", value: 5 },
        { label: 'JAVASCRIPT', name: 'javascript', color: "rgb(225, 130, 80)", value: 5 },
        { label: 'REACT', name: 'react', color: "rgb(50, 50, 50)", value: 5 },
        { label: 'NODE', name: 'node', color: "rgb(70, 120, 160)", value: 5 }
      ]
    });

    new CircleChart({
      $container: document.getElementById('skillset'),
      ringProportion: 0.42,
      tooltips: true,
      middleCircleColor: 'rgba(220, 220, 220, 1)',
      size: 100,
      background: 'rgba(20, 20, 20, 1)',
      definition: [
        { label: 'UI/UX', name: 'ui/ux', color: "rgb(225, 130, 80)", value: 5 },
        { label: 'RESPONSIVE DESIGN', name: 'responsivedesign', color: "rgb(rgb(50, 50, 50)", value: 5 },
        { label: 'PHOTOSHOP', name: 'photoshop', color: "rgb(225, 130, 80)", value: 5 },
        { label: 'API DEVELOPMENT', name: 'apidevelopment', color: "rgb(70, 120, 160)", value: 5 },
      ]
    });


  }

  render() {
    return (
      <div className="about-me-component">
        <div className="about-me-container">
          <div className="skills-container"></div>
          <div className="about-me-content">
            <div className="flex-container">
              <div className="about-me-content-column">
                <h3>KNOWLEDGE</h3>
                <ul>
                  <li>
                    <p>HTML5</p>
                  </li>
                  <li>
                    <p>CSS3</p>
                  </li>
                  <li>
                    <p>JAVASCRIPT</p>
                  </li>
                  <li>
                    <p>REACT</p>
                  </li>
                  <li>
                    <p>NODE</p>
                  </li>
                </ul>
              </div>
              <div className="graphic-graph" id="knowledge" />
            </div>
            <div className="flex-container">
              <div className="about-me-content-column">
                <h3>SKILLSET</h3>
                <ul>
                  <li>
                    <p>UI/UX</p>
                  </li>
                  <li>
                    <p>RESPONSIVE DESIGN</p>
                  </li>
                  <li>
                    <p>PHOTOSHOP</p>
                  </li>
                  <li>
                    <p>API DEVELOPMENT</p>
                  </li>
                  <li className="no-list-style">
                    <p></p>
                  </li>
                </ul>
              </div>
              <div className="graphic-graph" id="skillset" />
            </div>
            <div className="about-me-content-column">
              <h3>HOBBIES</h3>
              <ul>
                <li>
                  <p>LIFTING HEAVY STUFF <i className="fas fa-dumbbell"></i></p>
                </li>
                <li>
                  <p>FISHKEEPING <i className="fas fa-fish"></i></p>
                </li>
                <li>
                  <p>MANGA &amp; ANIME</p>
                </li>
                <li>
                  <p>BEER <i className="fas fa-beer"></i></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
