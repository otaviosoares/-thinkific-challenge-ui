import React from 'react';
import { shallow, mount } from 'enzyme';
import Next from './next';

test('it renders', () => {
  var component = shallow(
    <Next />
  )
  expect(component).toMatchSnapshot();
})

test('it renders', () => {
  const mockClick = jest.fn();
  const component = mount(
    <Next onClick={mockClick}></Next>
  );
  component.find('button').simulate('click');
  expect(mockClick).toHaveBeenCalled();
})
