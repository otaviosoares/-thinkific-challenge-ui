import {Map, fromJS} from 'immutable'
import reducer from './reducer'

test('handles SET_USER', () => {
  const initialState = Map();
  const action = {
    type: 'SET_USER',
    user: Map({
      token: 'the-token'
    })
  };
  const nextState = reducer(initialState, action);
  expect(nextState).toEqual(fromJS({
    user: action.user
  }));
});

test('handles SET_USER without initial state', () => {
  const action = {
    type: 'SET_USER',
    user: Map({
      token: 'the-token'
    })
  };
  const nextState = reducer(undefined, action);

  expect(nextState).toEqual(fromJS({
    user: action.user
  }));
});

test('handles NEXT_INTEGER', () => {
  const initialState = Map({
    integer: 10
  });
  const action = {
    type: 'NEXT_INTEGER'
  };
  const nextState = reducer(initialState, action);

  expect(nextState).toEqual(fromJS({
    integer: 11
  }));
});


test('handles REPLACE_INTEGER', () => {
  const initialState = Map({
    integer: 10
  });
  const action = {
    type: 'REPLACE_INTEGER',
    integer: 500
  };
  const nextState = reducer(initialState, action);

  expect(nextState).toEqual(fromJS({
    integer: 500
  }));
});
