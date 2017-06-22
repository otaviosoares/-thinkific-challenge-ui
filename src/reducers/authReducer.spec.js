import {Map, fromJS} from 'immutable'
import reducer from './authReducer'
import * as actions from '../auth/authActions'

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

test('USED_FETCHED should set the localStorage', () => {
  const action = {
    type: 'USED_FETCHED',
    payload: Map({
      token: 'the-token'
    })
  };

  reducer(null, action);

  expect(JSON.parse(localStorage.getItem('_auth'))).toEqual({
    token: 'the-token', 
    validToken: true
  });
});

test('handles SIGNED_OUT', () => {
  const initialState = fromJS({
    validToken: true
  });
  
  const nextState = reducer(initialState, actions.signout());

   expect(nextState).toEqual(fromJS({
    validToken: false
  }));
});

test('SIGNED_OUT should clear the localStorage', () => {
  localStorage.setItem('_auth', {validToken: true})
  const initialState = fromJS({
    validToken: true
  });
  
  reducer(initialState, actions.signout());

  expect(localStorage.getItem('_auth')).toEqual(null);
});