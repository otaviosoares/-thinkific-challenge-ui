import {Map} from 'immutable';

function setUser(state, payload) {
  payload = payload.set('validToken', true)
  return state = payload;
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'USED_FETCHED':
    return setUser(state, Map(action.payload));
  default:
    return state;
  }
}