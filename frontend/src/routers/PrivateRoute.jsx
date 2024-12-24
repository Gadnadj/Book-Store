import React from "react";
import PropTypes from "prop-types";
import { userAuth } from "../context/AuthContext";
import { Navigate } from "react";

const PrivateRoute = ({ children }) => {
  const { currentUser } = userAuth();
  if (currentUser) {
    return children;
  }
  return <Navigate to="login" replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
