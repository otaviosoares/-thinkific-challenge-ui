import reducer from './integerReducer'

test('handles NEXT_INTEGER', () => {
  const initialState = 10
  const action = {
    type: 'NEXT_INTEGER'
  };
  const nextState = reducer(initialState, action);

  expect(nextState).toEqual(11);
});


test('handles REPLACE_INTEGER', () => {
  const initialState = 10;
  const action = {
    type: 'REPLACE_INTEGER',
    payload: 500
  };
  const nextState = reducer(initialState, action);

  expect(nextState).toEqual(500);
});
