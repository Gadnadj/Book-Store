import React from "react";
import { userAuth } from "../context/AuthContext";
import { Navigate } from "react";

const PrivateRoute = ({ children }) => {
  const { currentUser } = userAuth();
  if (currentUser) {
    return children;
  }
  return <Navigate to="login" replace />;
};

export default PrivateRoute;
