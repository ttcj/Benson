import {
SIGNIN_USER,
SIGNUP_USER
} from '../actionTypes';

export const userSignup = user => async dispatch =>{
    // this is where a fetch to /siginup
    console.log(" this is the form", user);

    dispatch({type:SIGNUP_USER, payload:user})
}

export const userSignin = user => async dispatch =>{
    console.log('user information', user);
    // this is were fetch to /signin for user information
    dispatch({type:SIGNIN_USER, payload:user})
}