import React from "react";
import { connect } from "react-redux";
import Login from "../../components/login/loginPage";
import { signIn } from "../../store/actions/SignIn";
import { saveData } from "../../store/actions/Profile";

const LoginContainer = (props) => {
  return <Login {...props} />;
};
const mapStateToProps = ({ SignIn }) => {
  return {
    loginStatus: SignIn?.response?.token,
    loading: SignIn?.loading,
    signInResponse: SignIn?.response,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signInUser: (userData) => {
      dispatch(signIn(userData));
    },
    saveData: (data) => {
      dispatch(saveData(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
