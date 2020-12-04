import React, { Suspense } from "react";
import Loading from "../component/Loading/Loading";
import { Switch, Route } from "react-router-dom";
import { Direction } from "../App.types";
import { Blog, SinglePost } from "../app/index";

export default function BlogRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={Direction.Blog} component={Blog} />
        <Route path={Direction.Blog + "/:postid"} component={SinglePost} />
      </Switch>
    </Suspense>
  );
}
