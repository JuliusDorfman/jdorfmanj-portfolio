import React, { Component } from 'react';
import Header from '../../components/Header';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>

        <Header />

        <div className="container">

          <div className="landing-intro">
            <h1>Julius G. Dorfman</h1>
            <p className="work-intro">
              Simplicity is Beauty<i className="far fa-smile-wink work-intro-flavor"></i>
            </p>
          </div>
        </div>
        <div className="container">
          <form>
            <div>
              <span>
                <input type="text" name="name" placeholder=""/>
              </span>
            </div>
            <div>
              <span>
                <input type="text" name="email"/>
              </span>
            </div>
            <div>
              <span>
                <input type="text" name="message"/>
              </span>
            </div>

          </form>
        </div>
      </div>
    )
  }
}
