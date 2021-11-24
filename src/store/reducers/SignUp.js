import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../types";
const INIT_STATE = {
  response: null,
  error: null,
  loading: false,
};

const SignUp = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "RESET_PROFILE_STATES":
      return INIT_STATE;
    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case SIGN_UP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
export default SignUp;
