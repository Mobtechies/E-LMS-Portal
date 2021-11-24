import React from "react";
import { Route, withRouter, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import routerService from "./routerService";

const DefaultLayout = (props) => {
  const { match } = props;
  return (
    <Router>
      {routerService?.map((route, key) => (
        <Route
          exact
          key={key}
          path={`${match.url}/${route.path}`}
          component={route.component}
        />
      ))}
    </Router>
  );
};

export default withRouter(connect(null)(DefaultLayout));
