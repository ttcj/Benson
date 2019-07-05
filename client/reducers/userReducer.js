import {
  SIGNIN_USER,
  SIGNUP_USER,
  CONFIRM_USER,
  CREATE_BILL,
  ADD_MEMBER
} from '../actions/actionTypes'

const initalState = {
  currentUser: {},
  isConfirmed: false,
  error: [],
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
    case CREATE_BILL:
      const bills = [...state.bills]
      bills.push(action.payload)
      return {
        ...state,
        bills: bills
      }
    case ADD_MEMBER:
      const houseHold = [...state.houseHold]
      houseHold.push(action.payload)
      return {
        ...state,
        houseHold: houseHold
      }

    default:
      return state
  }
}
