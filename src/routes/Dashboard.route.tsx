import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Direction } from "../App.types";
import { Dashboard } from "../app/index";
import Posts from "../app/Dashboard/Post";
import Project from "../app/Dashboard/Project";
import ProtectedRoute from "./ProtectedRoute";

export default function DashboardRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={Direction.Dashboard} component={Dashboard} />
          <Route path={Direction.Dashboard + "/posts"} component={Posts} />
          <Route path={Direction.Dashboard + "/projects"} component={Project} />
        </Switch>
      </Router>
    </Suspense>
  );
}
