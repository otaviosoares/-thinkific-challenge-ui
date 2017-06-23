import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import consts from '../consts'

export function next () {
  const url = `${consts.BASE_URL}/v1/next`;
  return dispatch => {
    dispatch(showLoading());
    return axios.get(url)
      .then(response => {
        dispatch(hideLoading());
        toastr.success('Success', "You got the next integer.")
        dispatch({type: 'SET_INTEGER', payload: response.data.integer})
      })
  }
}

export function current () {
  const url = `${consts.BASE_URL}/v1/current`;
  return dispatch => {
    dispatch(showLoading());
    return axios.get(url)
      .then(response => {
        dispatch(hideLoading());
        dispatch({type: 'SET_INTEGER', payload: response.data.integer})
      })
  }
}

export function replace (values) {
  const url = `${consts.BASE_URL}/v1/current`;
  return dispatch => {
    dispatch(showLoading());
    return axios.put(url, values)
      .then(response => {
        dispatch(hideLoading());
        toastr.success('Success', "You've just replaced the integer.")
        dispatch({type: 'SET_INTEGER', payload: response.data.integer})
      })
  }
}