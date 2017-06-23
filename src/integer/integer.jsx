import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Current  from './current'
import Next  from './next'
import { ReplaceFormContainer }  from './replaceForm'
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
                <div className="col-xs-12 col-sm-8 col-md-10">
                  <Current current={this.props.integer} />
                </div>
                <div className="col-xs-12 col-sm-4 col-md-2">
                  <div className="row">
                    <div className="col-xs-12">
                      <Next
                        isLoading={this.props.isLoading}
                        onClick={this.props.next} />
                    </div>
                    <div className="col-xs-12">
                      <ReplaceFormContainer
                        isLoading={this.props.isLoading}
                        onSubmit={this.props.replace} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({integer: state.integer, isLoading: state.loadingBar})
const mapDispatchToProps = dispatch => bindActionCreators({ next, replace, current }, dispatch)

export const IntegerContainer = connect(mapStateToProps, mapDispatchToProps)(Integer)