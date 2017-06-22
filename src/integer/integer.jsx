import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Current  from './current'
import { next, replace, current } from './integerActions'

export default class Integer extends Component {
  componentWillMount() {
    this.props.current();
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Integer manipulation
            </div>
            <div className="panel-body">
              <div className="row">
                <Current current={this.props.integer} />
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <button onClick={this.props.next}>Next Integer</button>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <button onClick={this.props.next}>Next Integer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({integer: state.integer})
const mapDispatchToProps = dispatch => bindActionCreators({ next, replace, current }, dispatch)

export const IntegerContainer = connect(mapStateToProps, mapDispatchToProps)(Integer)