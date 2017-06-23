import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
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
    dispatch(showLoading());
    return axios.post(url, values)
      .then(response => {
        dispatch(hideLoading());
        toastr.success('Success', 'Welcome to integer as a service.')
        dispatch({type: 'USED_FETCHED', payload: response.data});
      })
  }
}