import axios from 'axios';
import consts from '../consts'

export function next () {
  const url = `${consts.BASE_URL}/v1/next`;
  return dispatch => {
    return axios.get(url)
      .then(response => dispatch({type: 'SET_INTEGER', payload: response.data.integer}))
  }
}

export function current () {
  const url = `${consts.BASE_URL}/v1/current`;
  return dispatch => {
    return axios.get(url)
      .then(response => dispatch({type: 'SET_INTEGER', payload: response.data.integer}))
  }
}

export function replace (values) {
  const url = `${consts.BASE_URL}/v1/current`;
  return dispatch => {
    return axios.put(url, values)
      .then(response => dispatch({type: 'SET_INTEGER', payload: response.data.integer}))
  }
}