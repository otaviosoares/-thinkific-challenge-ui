import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './authReducer';
import integerReducer from './integerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  integer: integerReducer,
  form: formReducer,
  toastr: toastrReducer,
  loadingBar: loadingBarReducer
})

export default rootReducer