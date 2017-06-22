import React from 'react';
import { shallow }from 'enzyme';
import Grid from './grid';

test('<Grid /> should render children elements', () => {
  const component = shallow(
    <Grid>
      <span id="child">Test</span>
    </Grid>
  );
  expect(component.find('#child')).toHaveHTML(
    '<span id="child">Test</span>'
  );
});

test('<Grid /> 1st param should parse to xs', () => {
  const component = shallow(
    <Grid cols='15'></Grid>
  );
  expect(component).toHaveClassName('col-xs-15');
});

test('<Grid /> 2nd param should parse to sm', () => {
  const component = shallow(
    <Grid cols='15 10'></Grid>
  );
  expect(component).toHaveClassName('col-xs-15 col-sm-10');
});

test('<Grid /> 3rd param should parse to md', () => {
  const component = shallow(
    <Grid cols='15 10 4'></Grid>
  );
  expect(component).toHaveClassName('col-xs-15 col-sm-10 col-md-4');
});

test('<Grid /> 2nd param should parse to lg', () => {
  const component = shallow(
    <Grid cols='15 10 4 5'></Grid>
  );
  expect(component).toHaveClassName('col-xs-15 col-sm-10 col-md-4 col-lg-5');
});

test('<Grid /> should default to xs-12', () => {
  const component = shallow(
    <Grid></Grid>
  );
  expect(component).toHaveClassName('col-xs-12');
});