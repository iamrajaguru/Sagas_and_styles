import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home";
import AppContext from "./context/App";
class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route
          exact={true}
          path="/context"
          component={AppContext}
        />
      </Switch>
    );
  }
}
export default Router;
