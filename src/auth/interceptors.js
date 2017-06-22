import axios from 'axios';

import {signout} from './authActions';

export default function (store) {
  axios.interceptors.response.use(null, function(err) {
    if(err.response.status === 401) {
      store.dispatch(signout());
    }
    return Promise.reject(err);
  });
}