import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelectAllSelector } from "../features/User/user.selector";
import { Direction } from "../App.types";
import subscribeUser from "../api/UserService/subscribeUser";

export default function ProtectedRoute({ children, ...rest }: any) {
  subscribeUser();
  const user = useSelector(userSelectAllSelector);

  return (
    <Route
      {...rest}
      render={(props: any) => {
        return user.length ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Direction.Auth,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}
