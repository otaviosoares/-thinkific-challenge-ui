import React from 'react';
import { shallow }from 'enzyme';
import Signup from './';

test('<Signup /> submits', () => {
  const mockClick = jest.fn();
  const component = shallow(
    <Signup onSubmit={mockClick}></Signup>
  );

  component.find('form').simulate('submit');
  expect(mockClick).toHaveBeenCalled();
});