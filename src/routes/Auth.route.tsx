import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { Direction } from "../App.types";
import { Auth } from "../app/index";

export default function AuthRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={Direction.Auth} component={Auth} />
        </Switch>
      </Router>
    </Suspense>
  );
}
