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
    action.payload = action.payload.set('validToken', true);
    localStorage.setItem(localStorageKey, JSON.stringify(action.payload))
    return setUser(state, Map(action.payload));
  case 'SIGNED_OUT':
    localStorage.removeItem(localStorageKey, JSON.stringify(action.payload))
    return invalidateToken(state);
  default:
    return state;
  }
}