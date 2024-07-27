import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return currentUser ? <Component {...rest} /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
