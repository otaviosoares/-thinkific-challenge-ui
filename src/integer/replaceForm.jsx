import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import IconButton from '../template/iconButton'
 
export default class ReplaceForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    
    return (
      <div role="form" class="form-inline">
        <h4>Set new integer</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Field
              name='integer'
              className="form-control"
              placeholder="Ex: 500"
              component='input' />
            <span className="input-group-btn">
              <IconButton
                style='primary'
                icon='plus' />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export const ReplaceFormContainer = reduxForm({form: 'auth'})(ReplaceForm)