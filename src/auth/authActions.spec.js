import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import consts from '../consts';
import * as actions from './authActions';

axios.defaults.host = consts.BASE_URL;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  test('signin should return a USED_FETCHED when user successfully signs IN', () => {
    nock(consts.BASE_URL)
      .post('/v1/auth/local')
      .reply(200, {token: '123'});
    
    const expectedActions = [
      { type: 'USED_FETCHED', payload: { token: '123' } }
    ];

    const store = mockStore({});
    store.dispatch(actions.signin())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  test('signin should return a USED_FETCHED when user successfully signs UP', () => {
    nock(consts.BASE_URL)
      .post('/v1/user')
      .reply(200, {token: '123'});
    
    const expectedActions = [
      { type: 'USED_FETCHED', payload: { token: '123' } }
    ];

    const store = mockStore({});
    store.dispatch(actions.signup())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
});