import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  form: formReducer,
  users: userReducer,
});

// const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
