import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Homepage.css';


export default class Homepage extends Component {
  render() {
    return (
      <div>

        <Header />

        <div className="container">

          <div className="landing-intro">
            <h1>Julius G. Dorfman</h1>
            <p className="work-intro">
              Of the mind that in simplicity is beauty.
              <br />
              But also complexity is fun.<i className="fas fa-grin-wink"></i>
            </p>
          </div>

        </div>


        <div className="content">

          <div className="portfolio">
            <div className="project-row">

              <div className="project-container">
                <div className="project" id="proj-1">
                  <div className="project-overlay">
                    <h3>Project Title</h3>
                    <p>
                      Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus
                      brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas,
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-container">
                <div className="project" id="proj-2">
                  <div className="project-overlay">
                    <h3>Project Title</h3>
                    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                      Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
                      Qui animated corpse, cricket bat max brucks terribi</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="project-row">

              <div className="project-container">
                <div className="project" id="proj-3">
                  <div className="project-overlay">
                    <h3>Project Title</h3>
                    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                      Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas, imo evil stale grave feeding iride et serpens. Pestilentia, shaun
                      ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague.</p>
                  </div>
                </div>
              </div>

              <div className="project-container">
                <div className="project" id="proj-4">
                  <div className="project-overlay">
                    <h3>Project Title</h3>
                    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                      Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas,  de grave feeding iride et serpens. Pestilentia, shaun
                      ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="page-detail">
            <p>Enjoy This Beautiful Use of Whitespace</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


