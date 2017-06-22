import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import IconButton from '../template/iconButton'
 
const validate = values => {
  const errors = {}
  if (!values.integer) {
    errors.integer = 'Required'
  } else if (values.integer < 0) {
    errors.integer = 'Must be positive'
  }
  return errors
}

const renderField = ({ input, placeholder, type, className, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} className={className} />
    {touched && (error && 
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        {error}
      </div>)}
  </div>
)

export default class ReplaceForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;
    
    return (
      <div role="form">
        <h4>Set new integer</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Field
              type="number"
              name='integer'
              className="form-control"
              placeholder="Ex: 500"
              component={renderField} />
            <span className="input-group-btn">
              <IconButton
                style='primary'
                disabled={submitting}
                icon='refresh' />
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export const ReplaceFormContainer = reduxForm({form: 'auth', validate})(ReplaceForm)