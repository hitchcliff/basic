import React, { Suspense } from "react";
import "./App.scss";
import { Navigation, Home, Dashboard, Projects, Footer } from "./app/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Direction } from "./App.types";
import Loading from "./component/Loading/Loading";
import BlogRoutes from "./routes/BlogRoutes";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={Direction.Home} component={Home} />
            <Route path={Direction.Projects} component={Projects} />
            <Route path={Direction.Blog} component={BlogRoutes} />
            <Route path={Direction.Dashboard} component={Dashboard} />
          </Switch>
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
