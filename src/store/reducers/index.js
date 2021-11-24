import { combineReducers } from "redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";

const rootReducer = combineReducers({
  SignIn,
  SignUp,
  Profile,
});
export default rootReducer;
