import React from 'react';
import { shallow }from 'enzyme';
import AuthForm from './authForm';

test('<AuthForm /> submits', () => {
  const mockClick = jest.fn();
  const component = shallow(
    <AuthForm handleSubmit={mockClick}></AuthForm>
  );
  component.find('form').simulate('submit');
  expect(mockClick).toHaveBeenCalled();
});