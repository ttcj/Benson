import { SIGNIN_USER, SIGNUP_USER, CONFIRM_USER } from '../actions/actionTypes'

const initalState = {
  currentUser: {},
  isConfirmed: false,
  houseHold: [],
  bills: []
}

export default function (state = initalState, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case SIGNUP_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case CONFIRM_USER:
      return {
        ...state,
        isConfirmed: action.payload
      }
    default:
      return state
  }
}
