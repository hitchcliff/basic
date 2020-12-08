import React, { Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Direction } from "./App.types";
import Loading from "./component/Loading/Loading";
import DashboardRoute from "./routes/Dashboard.route";
import AppRoutes from "./routes/App.route";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={Direction.Dashboard} component={DashboardRoute} />
          <Route exact path="*" component={AppRoutes} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
