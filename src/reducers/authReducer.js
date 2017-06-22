import {Map} from 'immutable';
const localStorageKey = '_auth';

const INITIAL_STATE = Map(
  localStorage.getItem(localStorageKey) ? 
  JSON.parse(localStorage.getItem(localStorageKey)) :
  {}
)

function setUser(state, payload) {
  return state = payload;
}

function invalidateToken(state) {
  return state.set('validToken', false);
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USED_FETCHED':
    let payload = Map(action.payload)
    payload = payload.set('validToken', true);
    localStorage.setItem(localStorageKey, JSON.stringify(payload))
    return setUser(state, payload);
  case 'SIGNED_OUT':
    localStorage.removeItem(localStorageKey, JSON.stringify(action.payload))
    return invalidateToken(state);
  default:
    return state;
  }
}