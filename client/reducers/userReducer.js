import { SIGNIN_USER, SIGNUP_USER } from '../actions/actionTypes';

const initalState = {
  currentUser: {id:1},
  houseHold: [],
  bills: [],
};

export default function(state = initalState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      console.log("i am the action payload", action.payload)
    case SIGNUP_USER:
    default:
      return state;
  }
}
