import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import Loading from "../components/Loading/Loading";
import { Navigate } from "react-router";

const AuthRoute = ({ children }) => {
  const { loading, user } = use(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthRoute;
