import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Homepage.css';


export default class Homepage extends Component {
  render() {
    return (
      <div>

        <Header />

        <div class="container">

          <div class="landing-intro">
            <h1>Julius G. Dorfman</h1>
          </div>
        </div>


        <div class="content">

          <div class="portfolio">
            <div class="project-row">

              <div class="project-container">
                <div class="project" id="proj-1">
                  <div class="project-overlay">
                    <h3>Project Title</h3>
                    <p>
                      Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus
                      brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas,
                    </p>
                  </div>
                </div>
              </div>

              <div class="project-container">
                <div class="project" id="proj-2">
                  <div class="project-overlay">
                    <h3>Project Title</h3>
                    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                      Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.
                      Qui animated corpse, cricket bat max brucks terribi</p>
                  </div>
                </div>
              </div>

            </div>
            <div class="project-row">

              <div class="project-container">
                <div class="project" id="proj-3">
                  <div class="project-overlay">
                    <h3>Project Title</h3>
                    <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis.
                      Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                      mortuis soulless creaturas, imo evil stale grave feeding iride et serpens. Pestilentia, shaun
                      ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague.</p>
                  </div>
                </div>
              </div>

              <div class="project-container">
                <div class="project" id="proj-4">
                  <div class="project-overlay">
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

          <div class="page-detail">

          </div>
        </div>
        <Footer />
      </div>
    )
  }
}


