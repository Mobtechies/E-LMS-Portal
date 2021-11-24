import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, useLocation } from "react-router-dom";
import RctDefaultLayout from "./DefaultLayout";
import AppSignIn from "../pages/Login";
import { LocalStorage } from "../../constants/LocalStorage";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const InitialPath = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

const MainApp = (props) => {
  const { location, match, user } = props;
  const query = useQuery();
  if (localStorage.getItem(LocalStorage.TOKEN) == null) {
    if (location.pathname !== "/login") {
      return <Redirect to={"/login"} />;
    }
  } else if (location.pathname === "/") {
    return <Redirect to={"/app/dashboard"} />;
  }
  const defaultPath = `${match.url}app`;
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
