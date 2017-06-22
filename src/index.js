import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { composeWithDevTools } from 'redux-devtools-extension';
import {AppOrAuthContainer} from './main/appOrAuth'
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import httpInterceptors from './auth/interceptors';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, multi),
));
httpInterceptors(store);

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
