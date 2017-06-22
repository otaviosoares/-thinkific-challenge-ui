import {Map, fromJS} from 'immutable'
import reducer from './authReducer'

test('handles USED_FETCHED', () => {
  const initialState = Map();
  const action = {
    type: 'USED_FETCHED',
    payload: Map({
      token: 'the-token'
    })
  };
  const nextState = reducer(initialState, action);
  expect(nextState).toEqual(fromJS({
    token: action.payload.get('token'), 
    validToken: true
  }));
});

test('handles USED_FETCHED without initial state', () => {
  const action = {
    type: 'USED_FETCHED',
    payload: Map({
      token: 'the-token'
    })
  };
  const nextState = reducer(undefined, action);

   expect(nextState).toEqual(fromJS({
    token: action.payload.get('token'), 
    validToken: true
  }));
});