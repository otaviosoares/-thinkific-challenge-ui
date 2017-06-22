import React from 'react';
import { shallow }from 'enzyme';
import ReplaceForm from './replaceForm';

test('<ReplaceForm /> submits', () => {
  const mockClick = jest.fn();
  const component = shallow(
    <ReplaceForm handleSubmit={mockClick}></ReplaceForm>
  );
  component.find('form').simulate('submit');
  expect(mockClick).toHaveBeenCalled();
});