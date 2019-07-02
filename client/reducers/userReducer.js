import { SIGNIN_USER, SIGNUP_USER } from '../actions/actionTypes';

const initalState = {
  currentUser: {},
  houseHold: [],
  bills: [],
};

export default function(state = initalState, action) {
  switch (action.type) {
    case SIGNIN_USER:
    return{
      ...state
    }
    case SIGNUP_USER:
      return{
        ...state
      }
    default:
      return state;
  }
}
