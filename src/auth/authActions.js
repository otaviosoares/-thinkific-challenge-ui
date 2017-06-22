import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import consts from '../consts'

export function signin(values) {
  return submit(values, `${consts.BASE_URL}/v1/auth/local`)
}

export function signup(values) {
  return submit(values, `${consts.BASE_URL}/v1/user`)
}

export function signout (e) {
  (e && e.preventDefault());
  return {
    type: 'SIGNED_OUT'
  }
}

function submit(values, url) {
  return dispatch => {
    return axios.post(url, values)
      .then(response => {
        toastr.success('Success', 'Welcome to integer as a service.')
        dispatch({type: 'USED_FETCHED', payload: response.data});
      })
  }
}