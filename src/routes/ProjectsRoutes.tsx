import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { Route, Switch } from "react-router-dom";
import { Direction } from "../App.types";
import { Projects, SingleProject } from "../app/index";

export default function ProjectsRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={Direction.Projects} component={Projects} />
        <Route
          path={Direction.Projects + "/:projectid"}
          component={SingleProject}
        />
      </Switch>
    </Suspense>
  );
}
