import { SIGNIN_USER, SIGNUP_USER, CONFIRM_USER } from './actionTypes'

export const userSignup = user => async dispatch => {
  dispatch({ type: SIGNUP_USER, payload: user })
}

export const userSignin = user => async dispatch => {
  dispatch({ type: SIGNIN_USER, payload: user })
}

export const confirmUser = confirmationCode => async dispatch => {
  dispatch({ type: CONFIRM_USER, payload: true })
}
