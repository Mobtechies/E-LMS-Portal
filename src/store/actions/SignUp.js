import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../types";

export const resetProfileStates = () => ({
  type: "RESET_PROFILE_STATES",
});

export const signUp = (user) => ({
  type: SIGN_UP,
  payload: user,
});

export const signUpSuccess = (data) => ({
  type: SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});
