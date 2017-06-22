import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import {AppOrAuthContainer} from './main/appOrAuth'
import {signout} from '../auth/authActions';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, multi),
));

axios.interceptors.response.use(null, function(err) {
  if(err.status === 401) {
    store.dispatch(signout());
  }
  return Promise.reject(err);
});

ReactDOM.render((
    <Provider store={store}>
      <Router>
        <div className="container">
          <Route path="/" component={AppOrAuthContainer}>
          </Route>
        </div>
      </Router>
    </Provider>
  ), document.getElementById('root'));

if (module.hot) {
  module.hot.accept(); 
}

registerServiceWorker();
