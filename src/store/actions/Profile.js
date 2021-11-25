import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  SAVE_DATA,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_FAILURE,
} from "../types";

export const resetProfileStates = () => ({
  type: "RESET_PROFILE_STATES",
});

export const getProfile = (id) => ({
  type: GET_USER_PROFILE,
  payload: id,
});

export const getProfileSuccess = (data) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileFailure = (error) => ({
  type: GET_USER_PROFILE_FAILURE,
  payload: error,
});

export const saveData = (data) => ({
  type: SAVE_DATA,
  payload: data,
});

export const saveDataSuccess = (data) => ({
  type: SAVE_DATA_SUCCESS,
  payload: data,
});

export const saveDataFailure = (error) => ({
  type: SAVE_DATA_FAILURE,
  payload: error,
});
