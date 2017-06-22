import {Map} from 'immutable';

function next(state) {
  return state = state + 1;
}

function replace(state, payload) {
  return state = payload;
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'NEXT_INTEGER':
    return next(state);
  case 'REPLACE_INTEGER':
    return replace(state, action.payload);
  default:
    return state;
  }
}