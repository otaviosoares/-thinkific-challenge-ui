import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
 
const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const renderField = ({ input, placeholder, type, className, meta: { touched, error } }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} className={className} />
    {touched}
    {touched && (error && 
      <div className="alert alert-danger" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> {error}
      </div>)}
  </div>
)

export default class AuthForm extends Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    
    return (
      <div role="form" className="panel panel-default auth-form">
        <div className="panel-heading">
          {this.props.title}
        </div>
        <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field
                name='email'
                className="form-control"
                placeholder="your-email@domain.com"
                component={renderField} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name='password'
                className="form-control"
                placeholder="your password"
                type="password"
                component={renderField} />
            </div>
            <button type="submit" className='btn btn-primary' disabled={submitting}>{this.props.button}</button>
          </form>
        </div>
      </div>
    );
  }
}

export const AuthFormContainer = reduxForm({form: 'auth', validate})(AuthForm)