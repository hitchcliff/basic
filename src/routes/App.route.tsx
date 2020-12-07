import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../component/Loading/Loading";
import { Direction } from "../App.types";
import ProjectsRoutes from "./ProjectsRoutes";
import BlogRoutes from "./BlogRoutes";
import { NotFound, Home, Footer, Navigation, Auth } from "../app/index";

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Navigation />
      <Switch>
        <Route exact path={[Direction.Home, "/home"]} component={Home} />
        <Route path={Direction.Auth} component={Auth} />
        <Route path={Direction.Projects} component={ProjectsRoutes} />
        <Route path={Direction.Blog} component={BlogRoutes} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Suspense>
  );
}
