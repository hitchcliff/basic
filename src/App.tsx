import React, { Suspense } from "react";
import "./App.scss";
import { Navigation, Home, Dashboard, Footer, NotFound } from "./app/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Direction } from "./App.types";
import Loading from "./component/Loading/Loading";
import BlogRoutes from "./routes/BlogRoutes";
import ProjectsRoutes from "./routes/ProjectsRoutes";
import DashboardRoute from "./routes/Dashboard.route";
import AppRoutes from "./routes/App.route";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            <Route
              exact
              path={[
                Direction.Home,
                "/home",
                Direction.Blog,
                Direction.Projects,
                Direction,
              ]}
              component={AppRoutes}
            />
            <Route path={Direction.Dashboard} component={DashboardRoute} />
          </Switch>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
