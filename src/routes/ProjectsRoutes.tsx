import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { Route } from "react-router-dom";
import { Direction } from "../App.types";
import { Projects, SingleProject } from "../app/index";

export default function ProjectsRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Route path={Direction.Projects} component={Projects} />
      <Route
        path={Direction.Projects + "/:projectid"}
        component={SingleProject}
      />
    </Suspense>
  );
}
