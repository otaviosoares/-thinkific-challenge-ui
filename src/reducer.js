import {Map} from 'immutable';

function setUser(state, user) {
  return state.set('user', user);
}

function next(state) {
  return state.update('integer', (i) => i + 1);
}

function replace(state, integer) {
  return state.set('integer', integer);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_USER':
    return setUser(state, action.user);
  case 'NEXT_INTEGER':
    return next(state);
  case 'REPLACE_INTEGER':
    return replace(state, action.integer);
  default:
    return state;
  }
}