import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Loading from "../component/Loading/Loading";
import { Direction } from "../App.types";
import ProjectsRoutes from "./ProjectsRoutes";
import BlogRoutes from "./BlogRoutes";
import { NotFound, Navigation, Home, Footer } from "../app/index";
import AuthRoute from "./Auth.route";

export default function AppRoutes() {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={[Direction.Home, "/home"]} component={Home} />
          <Route path={Direction.Auth} component={AuthRoute} />
          <Route path={Direction.Projects} component={ProjectsRoutes} />
          <Route path={Direction.Blog} component={BlogRoutes} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}
