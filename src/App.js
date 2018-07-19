import React, { Component } from 'react';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
