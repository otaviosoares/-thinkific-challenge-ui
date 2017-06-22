import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import {signout} from './authActions';

export default function (store) {
  axios.interceptors.response.use(null, function(err) {
    if(err.response && err.response.status === 401) {
      store.dispatch(signout());
    }
    toastr.error('Error', err.response && err.response.data && err.response.data.message ? err.response.data.message : "An error occurred");
    return Promise.reject(err);
  });
}