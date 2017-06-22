import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signout } from '../auth/authActions';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar-header">
          <span className="navbar-brand">Integer as a Service</span>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="" onClick={this.props.signout}>Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signout }, dispatch)

export const NavBarContainer = connect(null, mapDispatchToProps)(NavBar)