import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { Switch } from "react-router-dom";
import { Direction } from "../App.types";
import { Dashboard } from "../app/index";
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
