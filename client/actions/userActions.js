import {
  SIGNIN_USER,
  SIGNUP_USER,
  CONFIRM_USER,
  CREATE_BILL,
  ADD_MEMBER
} from './actionTypes'

export const userSignup = user => async dispatch => {
  try {
    dispatch({ type: SIGNUP_USER, payload: user })
  } catch (err) {
    console.log(err)
  }
}

export const userSignin = user => async dispatch => {
  dispatch({ type: SIGNIN_USER, payload: user })
}

export const confirmUser = confirmationCode => async dispatch => {
  dispatch({ type: CONFIRM_USER, payload: true })
}

export const createBill = billData => async dispatch => {
  dispatch({ type: CREATE_BILL, payload: billData })
}

export const addMember = member => async dispatch => {
  dispatch({ type: ADD_MEMBER, payload: member })
}
