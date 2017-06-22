import axios from 'axios';
import CONST from '../const'

export function signin(values) {
  return submit(values, `${CONST.BASE_URL}/v1/auth/local`)
}

export function signup(values) {
  return submit(values, `${CONST.BASE_URL}/v1/user`)
}

function submit(values, url) {
  return dispatch =>
    axios.post(url, values)
      .then(response => dispatch({type: 'USED_FETCHED', payload: response.data}))
}