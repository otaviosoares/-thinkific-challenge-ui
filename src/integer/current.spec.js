import React from 'react';
import { shallow } from 'enzyme';
import Current from './current';

test('it renders', () => {
  var component = shallow(
    <Current current="10" />
  )
  expect(component).toMatchSnapshot();
})