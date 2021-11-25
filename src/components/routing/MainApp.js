import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import RctDefaultLayout from "./DefaultLayout";
import AppSignIn from "../../views/login";
import { LocalStorage } from "../../constants/LocalStorage";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const MainApp = (props) => {
  const { location, match, user } = props;
  // signup("admin@lms.com", "admin").then((res) => {
  //   console.log(res);
  // });
  const query = useQuery();
  if (localStorage.getItem(LocalStorage.TOKEN) == null) {
    if (location.pathname !== "/login") {
      return <Redirect to={"/login"} />;
    }
  } else if (location.pathname === "/") {
    console.log(LocalStorage.USER_TYPE);
    if (localStorage.getItem(LocalStorage.USER_TYPE) === "admin") {
      return <Redirect to={"admin-dashboard"} />;
    } else if (localStorage.getItem(LocalStorage.USER_TYPE) === "student") {
      return <Redirect to={"student-dashboard"} />;
    } else if (localStorage.getItem(LocalStorage.USER_TYPE) === "faculty") {
      return <Redirect to={"faculty-dashboard"} />;
    }
  }
  const defaultPath = `${match.url}`;
  return (
    <>
      <InitialPath
        path={defaultPath}
        authUser={user}
        component={RctDefaultLayout}
      />
      <Route path="/login" component={AppSignIn} />
    </>
  );
};
const mapStateToProps = ({ SignIn }) => {
  const { user } = SignIn;
  return { user };
};

export default connect(mapStateToProps)(MainApp);
