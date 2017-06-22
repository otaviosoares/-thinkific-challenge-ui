import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { next, replace, current } from './integerActions'

export default class Integer extends Component {
  componentWillMount() {
    this.props.current();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2">
            CURRENT: {this.props.integer}
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <button onClick={this.props.next}>Next Integer</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <button onClick={this.props.next}>Next Integer</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({integer: state.integer})
const mapDispatchToProps = dispatch => bindActionCreators({ next, replace, current }, dispatch)

export const IntegerContainer = connect(mapStateToProps, mapDispatchToProps)(Integer)