import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
 
export default class AuthForm extends Component {
  render() {
    const {handleSubmit} = this.props;
    
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
                component='input' />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name='password'
                className="form-control"
                placeholder="your password"
                type="password"
                component='input' />
            </div>
            <button type="submit" className='btn btn-primary'>{this.props.button}</button>
          </form>
        </div>
      </div>
    );
  }
}
// export const AuthFormContainer = connect(
//   mapStateToProps,
//   actionCreators
// )(AuthForm);
// 
export const AuthFormContainer = reduxForm({form: 'auth'})(AuthForm)