import { NotificationManager } from "react-notifications";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  SAVE_DATA,
  SAVE_DATA_SUCCESS,
  SAVE_DATA_FAILURE,
} from "../types";

const INIT_STATE = {
  data: null,
  loading: false,
  response: null,
  error: null,
};

export default (state = INIT_STATE, action) => {
  let error = action.payload;
  switch (action.type) {
    case "RESET_PROFILE_STATES":
      return INIT_STATE;
    case GET_USER_PROFILE:
      return { ...state, loading: true };
    case GET_USER_PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_USER_PROFILE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SAVE_DATA:
      return { ...state, loading: true };
    case SAVE_DATA_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case SAVE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
