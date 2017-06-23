import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signin, signup } from './authActions'
import {AuthFormContainer as AuthForm} from './authForm';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-2">
            <AuthForm
              key='signin'
              form='signin'
              title='Sign in'
              button='Sign in'
              isLoading={this.props.isLoading}
              onSubmit={this.props.signin} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <AuthForm
              key='signup'
              form='signup'
              title='Sign up'
              button='Sign up'
              isLoading={this.props.isLoading}
              onSubmit={this.props.signup} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isLoading: state.loadingBar })
const mapDispatchToProps = dispatch => bindActionCreators({ signup, signin }, dispatch)

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)