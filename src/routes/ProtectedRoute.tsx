import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectAllSelector } from "../features/User/user.selector";
import { Direction } from "../App.types";

interface ProtectedRouteProps {
  children: any;
}

export default function ProtectedRoute({
  children,
  ...rest
}: ProtectedRouteProps) {
  const user = useSelector(userSelectAllSelector);

  return (
    <Route
      {...rest}
      render={() => {
        return user.length ? children : (window.location.pathname = "/auth");
      }}
    />
  );
}
