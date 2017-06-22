import reducer from './integerReducer'

test('handles SET_INTEGER', () => {
  const initialState = 10;
  const action = {
    type: 'SET_INTEGER',
    payload: 500
  }

  const nextState = reducer(initialState, action);

  expect(nextState).toEqual(500);
});
