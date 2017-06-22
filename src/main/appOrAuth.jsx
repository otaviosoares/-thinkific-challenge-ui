import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import App from './app';
import {AuthContainer} from '../auth/auth';

export default class AppOrAuth extends Component {
  render() {
    const auth = this.props.auth;

    if (auth.get('token') && auth.get('validToken')) {
      axios.defaults.headers.common['authorization'] = auth.get('token')
      return <App>{this.props.children}</App>
    }
    else {
      return <AuthContainer />
    }
  }
}

const mapStateToProps = state => ({auth: state.auth})

export const AppOrAuthContainer = connect(mapStateToProps)(AppOrAuth)