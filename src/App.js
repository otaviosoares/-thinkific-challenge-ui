import React, { Component } from 'react';
import { IntegerContainer } from './integer/integer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <span className="navbar-brand">Integer as a Service</span>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#contact">Logout</a></li>
          </ul>
        </div>

        <div className="content">
          <IntegerContainer />
        </div>
      </div>
    );
  }
}

export default App;
