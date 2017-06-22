import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer';
import integerReducer from './integerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  integer: integerReducer,
  form: formReducer
})

export default rootReducer