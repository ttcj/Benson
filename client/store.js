import { createStore, applyMiddleware, compose } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/root';

export default function configureStore(intialState) {
  const middlewares = [thunkMiddleware];

  const store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
}
