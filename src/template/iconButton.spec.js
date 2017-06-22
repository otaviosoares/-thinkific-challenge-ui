import React from 'react';
import { shallow }from 'enzyme';
import IconButton from './iconButton';

test('<IconButton /> should be hidden', () => {
  const component = shallow(
    <IconButton hide="true" />
  );
  expect(component.get(0)).toBeNull();
});

test('<IconButton /> should call the callback', () => {
  const mockClick = jest.fn();
  const component = shallow(
    <IconButton onClick={mockClick} />
  );
  component.find('button').simulate('click');
  expect(mockClick).toHaveBeenCalled();
});

test('<IconButton /> should set the correct styles', () => {
  const component = shallow(
    <IconButton styles='primary' />
  );
  expect(component.find('button')).toHaveClassName('btn btn-primary');
});

test('<IconButton /> should set the icon', () => {
  const component = shallow(
    <IconButton icon='plus' />
  );
  expect(component.find('button').find('i')).toHaveClassName('fa fa-plus');
});