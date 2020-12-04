import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Direction } from "../App.types";
import { Dashboard } from "../app/index";

export default function DashboardRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={Direction.Dashboard} component={Dashboard} />
        </Switch>
      </Router>
    </Suspense>
  );
}
