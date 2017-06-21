import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Signup from './components/signup';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = createStore(reducer)
ReactDOM.render((
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Signup} />
        </div>
      </Router>
    </Provider>
  ), document.getElementById('root'));

if (module.hot) {
  module.hot.accept(); 
}

registerServiceWorker();
