import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./MainApp";
import Login from "../../views/login";

export default function AppRouting() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={MainApp} />
      </Switch>
    </Router>
  );
}
