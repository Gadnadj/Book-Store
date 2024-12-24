import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // registter a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const value = {
    currentUser,
    registerUser
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // children doit être fourni
};
