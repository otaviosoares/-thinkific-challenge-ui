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
import Messages from './main/messages';
import LoadingBar from 'react-redux-loading-bar'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, multi),
));
httpInterceptors(store);

ReactDOM.render((
    <Provider store={store}>
      <div>
        <LoadingBar style={{ backgroundColor: '#337ab7'}} />
        <Router>
          <div className="container">
            <Route path="/" component={AppOrAuthContainer} />
          </div>
        </Router>
        <Messages />
      </div>
    </Provider>
  ), document.getElementById('root'));

if (module.hot) {
  module.hot.accept(); 
}

registerServiceWorker();
