import React, { Component } from 'react';
import { IntegerContainer } from '../integer/integer';
import { NavBarContainer } from '../template/navbar';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarContainer />
        <IntegerContainer />
      </div>
    );
  }
};