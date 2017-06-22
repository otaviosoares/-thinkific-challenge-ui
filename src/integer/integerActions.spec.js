import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import consts from '../consts';
import * as actions from './integerActions';

axios.defaults.host = consts.BASE_URL;
axios.defaults.adapter = httpAdapter;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  test('current should return a SET_INTEGER when gets the current integer', () => {
    nock(consts.BASE_URL)
      .get('/v1/current')
      .reply(200, {integer: 77});
    
    const expectedActions = [
      { type: 'SET_INTEGER', payload: 77 }
    ];

    const store = mockStore({});
    store.dispatch(actions.current())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  test('replace should return a SET_INTEGER when replaces the current integer', () => {
    const newInteger = 77;
    nock(consts.BASE_URL)
      .put('/v1/current')
      .reply(200, {integer: newInteger});
    
    const expectedActions = [
      { type: 'SET_INTEGER', payload: newInteger }
    ];

    const store = mockStore({});
    store.dispatch(actions.replace(newInteger))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });

  test('next should return a SET_INTEGER when asks for the next integer', () => {
    const newInteger = 100;
    nock(consts.BASE_URL)
      .get('/v1/next')
      .reply(200, {integer: newInteger});
    
    const expectedActions = [
      { type: 'SET_INTEGER', payload: newInteger }
    ];

    const store = mockStore({});
    store.dispatch(actions.next())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  });
});