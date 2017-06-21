import React, { Component } from 'react';
import './signup.css'
 
export default class SignUp extends Component {
  render() {
    return (
      <div className="panel panel-default signup-form">
        <div className="panel-heading">
        Sign up
        </div>
        <div className="panel-body">
          <form onSubmit={this.props.onSubmit}>
            <div className="form-group">
              <label for="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}