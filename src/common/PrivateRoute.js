import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return (
      <Route
        {...rest}
        render={(routeProps) => <RouteComponent {...routeProps} />}
      />
    );
  }
};

export default PrivateRoute;