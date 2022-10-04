import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  console.log("Location:", location);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  //  if user is not authenticated
  if (!currentUser) {
    return <Navigate to="/" replace state={{ path: location?.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
