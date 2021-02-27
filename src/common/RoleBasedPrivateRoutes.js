import React from "react";
import { useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";

export default function RoleBasedPrivateRoutes() {
  const TheLayout = React.lazy(() => import("../containers/TheLayout"));

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  if (currentUser) {
    return (
      <>
        <PrivateRoute exact path="/dashboard" component={TheLayout} />
      </>
    );
  } else {
    if (!(location.pathname === "/forgot_password")) {
      return <Redirect to={"/"} />
    }
    return null;
  }
}
