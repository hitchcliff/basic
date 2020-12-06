import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "../component/Loading/Loading";
import { Direction } from "../App.types";
import ProjectsRoutes from "./ProjectsRoutes";
import BlogRoutes from "./BlogRoutes";
import { NotFound, Navigation, Home, Footer, Auth } from "../app/index";

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={[Direction.Home, "/home"]} component={Home} />
          <Route path={Direction.Auth} component={Auth} />
          <Route path={Direction.Projects} component={ProjectsRoutes} />
          <Route path={Direction.Blog} component={BlogRoutes} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}
