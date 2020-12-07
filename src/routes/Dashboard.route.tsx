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
      <Switch>
        <ProtectedRoute path={Direction.Dashboard}>
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Suspense>
  );
}
