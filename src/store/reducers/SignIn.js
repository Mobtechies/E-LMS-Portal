import { NotificationManager } from "react-notifications";
import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "../types";

const INIT_STATE = {
  user: null,
  response: "",
  error: null,
  loading: false,
};

const SignIn = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "RESET_SIGN_IN_STATES":
      return INIT_STATE;
    case SIGN_IN:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN_SUCCESS:
      NotificationManager.success("Login Successfully");
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      NotificationManager.error(action.payload.message);
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default SignIn;
